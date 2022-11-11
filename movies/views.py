from django.shortcuts import render
from django.views.decorators.http import require_safe
from django.shortcuts import render, redirect, get_object_or_404, get_list_or_404
from .models import Movie, Genre


# Create your views here.
@require_safe
def index(request):
    movies = get_list_or_404(Movie)
    context = {
        'movies': movies
    }
    return render(request, 'movies/index.html', context)

@require_safe
def detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk = movie_pk)
    genre = movie.genres.all()
    genre_list = []
    for i in genre:
        genre_list.append(i.id)
    context = {
        'movie': movie,
        'genre_list':genre_list,
        'long':len(genre_list)
    }
    return render(request, 'movies/detail.html', context)




@require_safe
def recommended(request):
    pass