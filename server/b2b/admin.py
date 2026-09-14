from django.contrib import admin
from b2b.models import B2BRequests, B2BTypes, ReadySelectedB2B

admin.site.register([B2BRequests, B2BTypes, ReadySelectedB2B])
