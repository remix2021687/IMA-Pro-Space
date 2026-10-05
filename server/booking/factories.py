import factory
from django.contrib.auth import get_user_model
from booking.models import Room

User = get_user_model()

class RoomFactory(factory.django.DjangoModelFactory):
	class Meta:
		model = Room