from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings


def send_confirmation_email(email, full_name, date_str, services_list, phone):
	subject = "Potvrzení přijetí B2B žádosti"

	context = {
		'full_name': full_name,
		'email': email,
		'services_list': services_list,
		'date': date_str,
		"phone": phone,
		"company_name": "IMA Pro Space"
	}

	html_content = render_to_string("email/b2b_configuration/index.html", context)

	msg = EmailMultiAlternatives(
		subject=subject,
		from_email=settings.DEFAULT_FROM_EMAIL,
		to=[email],
	)
	msg.attach_alternative(html_content, "text/html")
	msg.send(fail_silently=True)


def send_confirmation_email_admin(
		admin_email: list, client_email, full_name, date_str,
		services_list, phone, notes
):
	subject = "Přijetí B2B žádosti | Admin "

	context = {
		# "manager_name": "Petr",  # необязательно
		"recipient_name": full_name,  # имя клиента
		"phone_number": phone,
		"email": client_email,  # необязательно
		"appointment_date": date_str,
		"selected_services": services_list,
		# "reference_number": "2024-089",
		"note": notes,  # необязательно
		"response_hours": 24,
		# "received_at": "12.09.2026 23:31",  # необязательно
		# "crm_url": "https://crm.example.com/leads/2024-089",
		"company_name": "IMA Pro Space",
		"current_year": 2026,
	}

	html_content = render_to_string("email/b2b_configuration_admin/index.html", context)

	msg = EmailMultiAlternatives(
		subject=subject,
		from_email=settings.DEFAULT_FROM_EMAIL,
		to=admin_email,
	)

	msg.attach_alternative(html_content, "text/html")
	msg.send(fail_silently=True)
