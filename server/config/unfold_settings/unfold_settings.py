from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _

UNFOLD = {
    "SITE_TITLE": "IMA Pro Space | Admin",
    "SITE_HEADER": "IMA Pro Space",
	"SITE_URL": "/",
    "SHOW_HISTORY": True,
	"SHOW_LANGUAGES": True,
    "SITE_VERSION": "0.1.0 beta",
	"BORDER_RADIUS": "12px",
	"THEME": "light",

    "COLORS": {
        "primary": {
            "50": "250 250 250",   # Светло-серый (для фонов активных элементов и ховеров)
            "100": "244 244 245",
            "200": "228 228 231",
            "300": "212 212 216",
            "400": "161 161 170",
            "500": "24 24 27",     # Основной черный (кнопки, активные ссылки, чекбоксы)
            "600": "39 39 42",
            "700": "63 63 70",
            "800": "39 39 42",
            "900": "24 24 27",
            "950": "9 9 11",       # Глубокий черный
        },
    },

	"SIDEBAR": {
        "navigation": [
            {
                "title": _("Управление сайтом"),
                "separator": True,
                "items": [
                    {
                        "title": _("Помещения"),
                        "icon": "meeting_room",
                        "link": reverse_lazy("admin:booking_room_changelist"),
                    },
                    {
						"badge": "b2b.badges.get_new_b2b_requests",
                        "title": _("B2B Заявки"),
                        "icon": "mail",
                        "link": reverse_lazy("admin:b2b_b2brequests_changelist"),
                    },
                ],
            },
        ],
    },
}