from django.urls import path
from . import views

urlpatterns =[
    path('collection/<int:movie_pk>/', views.collection),
]