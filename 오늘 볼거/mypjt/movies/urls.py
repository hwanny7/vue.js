
from django.urls import path
from . import views

urlpatterns = [
    path('movies/actors/', views.actor_list),
    path('movies/actors/<int:actor_pk>/', views.actor_detail),
    path('movies/movies/', views.movie_list),
    path('movies/movies/<int:movie_pk>/', views.movie_detail),
    path('movies/reviews/', views.review_list),
    path('movies/reviews/<int:review_pk>/', views.review_detail),
    path('movies/movies/<int:movie_pk>/reviews/', views.create_review),
]