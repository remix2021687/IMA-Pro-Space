from rest_framework.viewsets import ReadOnlyModelViewSet
from b2b.models import B2BTypes
from api.B2B.serializer import B2BTypeSerializer

class B2BTypesViewSet(ReadOnlyModelViewSet):
    queryset = B2BTypes.objects.all()
    serializer_class = B2BTypeSerializer
