from django.core.mail import send_mail
from django.conf import settings

def send_confirmation_email(email, full_name, date_str, services_list):
    subject = "Potvrzení přijetí B2B žádosti"
    message = (
        f"Dobrý den, {full_name},\n\n"
        f"děkujeme za vaši žádost o B2B služby.\n\n"
        f"Shrnutí objednávky:\n"
        f"- Vybrané služby: {services_list}\n"
        f"- Požadovaný termín: {date_str}\n\n"
        f"Vaši žádost zpracujeme a co nejdříve vás budeme kontaktovat.\n\n"
        f"S pozdravem,\nTým B2B Services"
    )

    send_mail(
        subject=subject,
        message=message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[email],
        fail_silently=False,
    )

