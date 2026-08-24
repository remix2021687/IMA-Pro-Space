import json
import os
from typing import Any

import requests
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import status
from dotenv import load_dotenv

from booking.models import Room, Service, ServiceContent, ServiceEquipment
from api.alteg.serializer import RoomSerializer, RoomSerializerList, ServiceSerializer, ServiceListSerializer
from api.alteg.parsers.comment_parser import parser_comment_alteg

load_dotenv()

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
		company_id = os.getenv("ALTEGIO_COMPANY_ID")
		user_token = os.getenv("ALTEGIO_USER_TOKEN")
		partner_token = os.getenv("ALTEGIO_PARTNER_TOKEN")


		headers = {
			"Authorization": f"Bearer {user_token}, User {partner_token}",
			"Accept": "application/vnd.api.v2+json",
			"Content-Type": "application/json",
		}

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

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Service.objects.all()

	def get_serializer_class(self):
		if self.action == "list":
			return ServiceListSerializer
		return ServiceSerializer
