import os

import requests
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets, status
from dotenv import load_dotenv

from booking.models import Room, Service, ServiceContent, ServiceEquipment
from api.alteg.serializer import (RoomSerializer, RoomSerializerList, ServiceSerializer,
								  ServiceListSerializer, AvailableTimeSerializer, AvailableDatesSerializer,
								  CreateBookingRecord)
from api.alteg.parsers.comment_parser import parser_comment_alteg

load_dotenv()

company_id = os.getenv("ALTEGIO_COMPANY_ID")
user_token = os.getenv("ALTEGIO_USER_TOKEN")
partner_token = os.getenv("ALTEGIO_PARTNER_TOKEN")

headers = {
	"Authorization": f"Bearer {partner_token}, User {user_token}",
	"Accept": "application/vnd.api.v2+json",
	"Content-Type": "application/json",
}

# class AltegWebhook(APIView):
# 	authentication_classes = []
# 	permission_classes = []
#
# 	def post(self, request, *args, **kwargs):
# 		print("WEBHOOK DATA:", request.data)
# 		return Response({"status": "success"}, status=status.HTTP_200_OK)

class RoomWithService(viewsets.ReadOnlyModelViewSet):
	queryset = Room.objects.filter(is_published=True)

	def get_serializer_class(self):
		if self.action == "list":
			return RoomSerializerList
		return  RoomSerializer

	def sync_data(self):

		url_staff = f"https://api.alteg.io/api/v1/staff/{company_id}/"

		room_request = requests.get(url_staff, headers=headers, timeout=10)
		room_data = room_request.json().get("data")

		staff_map = {}
		for room in room_data:
			obj, _ = Room.objects.update_or_create(
				altegio_id=room.get("id"),
				name=room.get("name"),
				specialization=room.get("specialization"),
				photo=room.get("avatar_big"),
			)

			staff_map[obj.altegio_id] = obj

		url_service = f"https://api.alteg.io/api/v1/services/{company_id}/"
		service_request = requests.get(url_service, headers=headers, timeout=10)
		service_data = service_request.json().get("data")

		for service in service_data:
			service_obj, _ = Service.objects.update_or_create(
				altegio_id=service.get("id"),
				name=service.get("title"),
				price=service.get("price_max"),
				comment=service.get("comment"),
			)

			sluzba_arr, vybava_arr = parser_comment_alteg(service.get("comment"))

			for item in sluzba_arr:
				ServiceContent.objects.update_or_create(
					name=item,
					service_id=service_obj.id,
				)

			for item in vybava_arr:
				ServiceEquipment.objects.update_or_create(
					name=item,
					service_id=service_obj.id,
				)

			attached_staff = service.get("staff") or []
			for staff in attached_staff:
				staff_id = staff.get("id")
				if staff_id and staff_id in staff_map:
					staff_map[staff_id].service.add(service_obj)

	def list(self, request, *args, **kwargs):
		try:
			self.sync_data()
		except Exception as e:
			print(e)
			return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
		return super().list(request, *args, **kwargs)

	@action(methods=["POST"], detail=False, url_path="create")
	def booking_create(self, request):
		serializer = CreateBookingRecord(data=request.data)
		if serializer.is_valid():
			data = serializer.validated_data

			staff_id = data["staff_id"]
			service_id = data["service_id"]
			datetime = data["datetime"]
			client_fullname = data["client_fullname"]
			client_phone = data["client_phone"]
			client_email = data["client_email"]

			payload = {
				"phone": client_phone,
				"fullname": client_fullname,
				"email": client_email,
				"appointments": [
					{
						"id": 1,
						"services": [service_id],
						"staff_id": staff_id,
						"datetime": datetime,
					}
				]
			}
   
			url = f"https://api.alteg.io/api/v1/book_record/{company_id}/"
   
			try:
				response = requests.post(url, json=payload, headers=headers, timeout=10)

				response_json = response.json()

				if response_json.get("success"):
					return Response(response_json, status=status.HTTP_201_CREATED)
				else:
					return Response(response_json, status=status.HTTP_400_BAD_REQUEST)

			except requests.RequestException as e:
				return Response({
					"error": "Ошибка отправки",
					"detail": str(e),
				}, status=status.HTTP_502_BAD_GATEWAY)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	@action(methods=["GET"], detail=False, url_path=r"available-dates/(?P<staff_id>\d+)")
	def get_available_dates(self, request, staff_id=None):
		try:
			url = f"https://api.alteg.io/api/v1/book_dates/{company_id}/"

			query = {
				"staff_id": int(staff_id),
			}

			request = requests.get(url, headers=headers, params=query, timeout=10)

			response_json = request.json()
			data = response_json.get("data")

			return Response(
				{"available_dates": data.get("booking_dates")}, status=status.HTTP_200_OK
			)
		except requests.RequestException as e:
			return Response({"error": "Ошибка получения данных", "detail": str(e)}, status=status.HTTP_502_BAD_GATEWAY)


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Service.objects.all()

	def get_serializer_class(self):
		if self.action == "list":
			return ServiceListSerializer
		return ServiceSerializer

	@action(methods=["POST"], detail=False, url_path="available-time")
	def available_time(self, request):
		serializer = AvailableTimeSerializer(data=request.data)
		if serializer.is_valid():
			staff_id = serializer.validated_data["staff_id"]
			date = serializer.validated_data["date"]

			url_time = f"https://api.alteg.io/api/v1/book_times/{company_id}/{staff_id}/{date}/"

			try:
				available_time = requests.get(url_time, headers=headers, timeout=10)
				available_time_response = available_time.json()

				if not available_time_response.get("success", True):
					return Response({
						"error": "Altegio отклонил запрос.",
						"detail": available_time_response,
					}, status=status.HTTP_400_BAD_REQUEST)

				raw_slot_time = available_time_response.get("data")
				formatted_slot_time = [
					{"time": slot.get("time"), "datetime": slot.get("datetime")}
					for slot in raw_slot_time if isinstance(slot, dict)
				]

				return Response(formatted_slot_time, status=status.HTTP_200_OK)


			except Exception as e:
				return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)