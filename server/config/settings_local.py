import os
from dotenv import load_dotenv

load_dotenv()

DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1', ".ngrok-free.app"]

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.postgresql_psycopg2',
		'NAME': 'WORKDB3',
		'USER': 'ROOT',
		'PASSWORD': '2010665KE',
		'HOST': os.environ.get("LOCALE_IP"),
		'PORT': '5432',
	}
}

CORS_ALLOWED_ORIGINS = [
	'http://localhost:3000',
]