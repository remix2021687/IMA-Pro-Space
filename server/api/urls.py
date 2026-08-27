from django.contrib import admin
from django.urls import path, include
from  rest_framework.routers import DefaultRouter

from api.alteg.resourceview import RoomWithService, ServiceViewSet
# from .alteg.resourceview import AltegWebhook

router = DefaultRouter()
router.register(r'rooms', RoomWithService)
router.register(r'services', ServiceViewSet, basename="services")
urlpatterns = [
	# path('webhooks/altegio/', AltegWebhook.as_view(), name='alteg_webhook'),
    path('admin/', admin.site.urls),
	path('', include(router.urls)),
]