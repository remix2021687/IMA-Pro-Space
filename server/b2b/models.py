import uuid

from django.db import models

class B2BRequests(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	full_name = models.CharField(max_length=200, blank=True, null=True, help_text="Full Name")
	email = models.EmailField(max_length=200, blank=True, null=True, help_text="E-Mail Address")
	phone = models.CharField(max_length=200, blank=True, null=True, help_text="Phone Number")
	b2b_type = models.ManyToManyField("B2BTypes")
	date = models.DateField(blank=True, null=True, help_text="Date of Birth")
	notes = models.TextField(max_length=3000, blank=True, null=True, help_text="Notes")
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"Request by {self.full_name}"


class ReadySelectedB2B(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=200, blank=True, null=True, help_text="Name")
	b2b_type = models.ManyToManyField("B2BTypes", related_name="b2b_ready")

	def __str__(self):
		return self.name

class B2BTypes(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=200, blank=True, null=True, help_text="B2B Type")
	notes = models.CharField(max_length=200, blank=True, null=True, help_text="Notes")

	def __str__(self):
		return self.name