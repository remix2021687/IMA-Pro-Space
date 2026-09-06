#!/usr/bin/env bash
set -o errexit

mkdir -p ./static
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate
python manage.py createsuperuser --noinput || true