# Generated by Django 3.1.4 on 2021-02-03 05:50

import django.contrib.auth.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat_room', '0005_auto_20210203_1525'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='text',
            field=models.TextField(verbose_name='Сообщение'),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username'),
        ),
    ]
