from  rest_framework import serializers
from b2b.models import B2BTypes

class B2BTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = B2BTypes
        fields = ('id', 'name', 'notes')