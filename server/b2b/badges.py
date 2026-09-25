from b2b.models import B2BRequests

def get_new_b2b_requests(request):
	count = B2BRequests.objects.filter(status="PENDING").count()

	return count if count > 0 else None