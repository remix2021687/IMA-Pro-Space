import os

DEBUG = False

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '*').split(',')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': f'{os.environ.get('DB_NAME')}',
        'USER': f'{os.environ.get('DB_USER')}',
        'PASSWORD': f'{os.environ.get('DB_PASSWORD')}',
        'HOST': f"{os.environ.get('DB_HOST')}",
        'PORT': f"{os.environ.get('DB_PORT', '5432')}",
    }
}

cors_env = os.environ.get('CORS_ALLOWED_ORIGINS', '')
CORS_ALLOWED_ORIGINS = [url.strip() for url in cors_env.split(',')] if cors_env else []