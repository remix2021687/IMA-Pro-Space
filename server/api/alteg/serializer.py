from rest_framework import serializers
from booking.models import Room, Service

class ServiceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Service
		fields = ("id", "altegio_id", "name", "price", "comment", "created_at", "updated_at")

class RoomSerializer(serializers.ModelSerializer):
	service = ServiceSerializer(many=True, read_only=True)
	class Meta:
		model = Room
		fields = ("id", "altegio_id", "photo", "name", "specialization", "service", "created_at", "updated_at")
