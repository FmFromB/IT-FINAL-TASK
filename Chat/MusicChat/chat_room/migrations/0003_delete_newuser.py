# Generated by Django 3.1.4 on 2021-02-02 04:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat_room', '0002_newuser'),
    ]

    operations = [
        migrations.DeleteModel(
            name='NewUser',
        ),
    ]