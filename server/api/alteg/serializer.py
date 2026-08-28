from rest_framework import serializers
from booking.models import Room, Service, ServiceContent, ServiceEquipment

class ServiceEquipmentSerializer(serializers.ModelSerializer):
	class Meta:
		model = ServiceEquipment
		fields = ("id", "name")

class ServiceContentSerializer(serializers.ModelSerializer):
	class Meta:
		model = ServiceContent
		fields = ("id", "name")

class AvailableTimeSerializer(serializers.Serializer):
	staff_id = serializers.IntegerField(help_text="Staff ID")
	date = serializers.DateField(format="%Y-%m-%d", input_formats=["%Y-%m-%d"],help_text="Date in format YYYY-MM-DD")

class CreateBookingRecord(serializers.Serializer):
	staff_id = serializers.IntegerField(help_text="Staff ID")
	service_id = serializers.IntegerField(help_text="Service ID")
	datetime = serializers.CharField(max_length=100, help_text="Date in format YYYY-MM-DD")
	client_fullname = serializers.CharField(max_length=100, help_text="Client Name")
	client_phone = serializers.CharField(max_length=100, help_text="Client Phone")
	client_email = serializers.EmailField(max_length=100, help_text="Client Email")

class ServiceSerializer(serializers.ModelSerializer):
	content = ServiceContentSerializer(many=True, read_only=True)
	equipment = ServiceEquipmentSerializer(many=True, read_only=True)

	class Meta:
		model = Service
		fields = ("id", "altegio_id", "name", "price", "comment", "content", "equipment", "created_at", "updated_at")

class ServiceListSerializer(serializers.ModelSerializer):
	class Meta:
		model = Service
		fields = ("id", "name")

class RoomSerializerList(serializers.ModelSerializer):

	class Meta:
		model = Room
		fields = ('id', 'photo', 'name', "description")

class RoomSerializer(serializers.ModelSerializer):
	service = ServiceListSerializer(many=True, read_only=True)

	class Meta:
		model = Room
		fields = ("altegio_id", "photo", "name", "description", "service", "created_at", "updated_at")
