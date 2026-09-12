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
        "phone": phone
    }

    html_content = render_to_string("email/b2b_configuration/index.html", context)

    msg = EmailMultiAlternatives(
        subject=subject,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[email],
    )
    msg.attach_alternative(html_content, "text/html")
    msg.send(fail_silently=True)


