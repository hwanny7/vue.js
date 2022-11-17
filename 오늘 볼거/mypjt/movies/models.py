
from django.db import models
from django.conf import settings

# Create your models here.

class Actor(models.Model):
    name = models.CharField(max_length=100)
    # actor에서 movie 나오는거 추가해야해

class Movie(models.Model):
    actors = models.ManyToManyField(Actor, related_name = 'movies')
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.DateTimeField(auto_now_add=True)
    poster_path = models.TextField()


class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()

# class Reservation(models.Model):
#     actor = models.ForeignKey(Actor, on_delete=models.CASCADE)
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)