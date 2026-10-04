from django_q.tasks import async_task
from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from django.contrib.auth import get_user_model

from b2b.models import B2BTypes, ReadySelectedB2B, B2BRequests
from api.B2B.serializer import B2BTypeSerializer, B2BReadySelectedSerializer, B2BRequestSerializer


class B2BViewSet(ModelViewSet):
	queryset = B2BRequests.objects.all()
	serializer_class = B2BRequestSerializer
	http_method_names = ['post']

	def perform_create(self, serializer):
		user = get_user_model()
		instance = serializer.save()

		service_list = " + ".join([service.name for service in instance.b2b_type.all()])
		formated_date = instance.date.strftime('%d.%m.%Y')

		async_task(
			"b2b.tasks.send_confirmation_email",
			instance.email,
			instance.full_name,
			formated_date,
			service_list,
			instance.phone,
		)

		admin_list = list(
			user.objects.filter(is_staff=True, is_active=True, is_superuser=False)
			.exclude(email="")
			.values_list("email", flat=True),
		)

		async_task(
			"b2b.tasks.send_confirmation_email_admin",
			admin_list,
			instance.email,
			instance.full_name,
			formated_date,
			service_list,
			instance.phone,
			instance.notes,

		)


class B2BTypesViewSet(ReadOnlyModelViewSet):
	queryset = B2BTypes.objects.all()
	serializer_class = B2BTypeSerializer


class B2BReadySelectedViewSet(ReadOnlyModelViewSet):
	queryset = ReadySelectedB2B.objects.all()
	serializer_class = B2BReadySelectedSerializer
