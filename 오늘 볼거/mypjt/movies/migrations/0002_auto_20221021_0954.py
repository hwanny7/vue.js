# Generated by Django 3.2.11 on 2022-10-21 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='actors',
            field=models.ManyToManyField(to='movies.Actor'),
        ),
        migrations.DeleteModel(
            name='Reservation',
        ),
    ]
