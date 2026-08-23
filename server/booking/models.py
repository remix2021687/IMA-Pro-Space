import uuid

from django.db import models

class RoomAdvantages(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100, verbose_name="Name of room")

	def __str__(self) -> str:
		return f"Room {self.name}"

class Service(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	altegio_id = models.IntegerField(unique=True, verbose_name="ID of service")
	name = models.CharField(max_length=100, verbose_name="Name of service")
	price = models.IntegerField(default=0, verbose_name="Price of service")
	comment = models.TextField(max_length=3000, verbose_name="Comment of service")
	created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created at")
	updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated at")

	def __str__(self):
		return f"Service {self.name}"


class Room(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	altegio_id = models.IntegerField(unique=True, verbose_name="ID of room")
	photo = models.URLField(verbose_name="Photo URL of room")
	name = models.CharField(max_length=100, verbose_name="Name of room")
	specialization = models.CharField(max_length=100, verbose_name="Specialization of room")
	created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created at")
	updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated at")
	service = models.ManyToManyField(Service, verbose_name="Service", editable=False)
	room_advantages = models.ManyToManyField(RoomAdvantages, verbose_name="Room Advantages")

	def __str__(self):
		return f"Room {self.name} | {self.specialization}"
