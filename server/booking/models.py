import uuid

from django.db import models

class ServiceContent(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100, verbose_name="Name of service content")
	service = models.ForeignKey("Service", on_delete=models.CASCADE, verbose_name="Service", editable=False, related_name="content")

	def __str__(self):
		return f"Service content | {self.name}"

class ServiceEquipment(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100, verbose_name="Name of service equipment")
	service = models.ForeignKey("Service", on_delete=models.CASCADE, verbose_name="Service", editable=False, related_name="equipment")

	def __str__(self):
		return f"Service equipment | {self.name}"

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
	is_published = models.BooleanField(default=False, verbose_name="Is published room")
	name = models.CharField(max_length=100, verbose_name="Name of room", editable=False)
	visible_name = models.CharField(max_length=100, verbose_name="Visible name of room", blank=True, null=True)
	specialization = models.CharField(max_length=100, verbose_name="Specialization of room")
	description = models.TextField(max_length=3000, verbose_name="Description of room", default="")
	created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created at")
	updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated at")
	service = models.ManyToManyField(Service, verbose_name="Service", editable=False)

	def __str__(self):
		return f"Room - {self.name} ({self.visible_name}) | {self.specialization}"
