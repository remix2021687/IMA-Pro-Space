from django.contrib import admin
from unfold.admin import ModelAdmin
from unfold.decorators import display
from modeltranslation.admin import TranslationAdmin

from b2b.models import B2BRequests, B2BTypes, ReadySelectedB2B

# admin.site.register([B2BRequests, B2BTypes, ReadySelectedB2B])


@admin.register(B2BRequests)
class B2BRequestsAdmin(ModelAdmin):
	list_display = ("full_name", "email", "status_badge", "date")
	list_filter = ("created_at", "status")
	search_fields = ("email", "full_name", "b2b_type__name")


	@display(
		description="Request Status",
		label={
			"PENDING": "danger",
			"IN PROGRESS": "warning",
			"APPROVED": "success",
		}
	)
	def status_badge(self, obj):
		return obj.status