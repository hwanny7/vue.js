from django.shortcuts import render, get_list_or_404, get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ActorListSerializer, ActorSerializer, MovieListSerializer, MovieSerializer, ReviewListSerializer, ReviewSerializer
from .models import Actor, Movie, Review
from movies import serializers


# Create your views here.
@api_view(['GET'])
def actor_list(request):
    actors = get_list_or_404(Actor)
    serializers = ActorListSerializer(actors, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def actor_detail(request, actor_pk):
    actor = get_object_or_404(Actor, pk=actor_pk)
    serializer = ActorSerializer(actor)
    return Response(serializer.data)


@api_view(['GET'])
def movie_list(request):
    movies = get_list_or_404(Movie)
    serializers = MovieListSerializer(movies , many=True)
    return Response(serializers.data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


@api_view(['GET'])
def review_list(request):
    reviews = get_list_or_404(Review)
    serializers = ReviewListSerializer(reviews, many=True)
    return Response(serializers.data)


@api_view(['GET','PUT','DELETE'])      # 수정, 삭제 추가 필요
def review_detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    
    if request.method == 'GET':
        serializer = ReviewSerializer(review)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ReviewSerializer(review, data=request.data, partial=True)  # partial: 일부 수정
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    elif request.method == 'DELETE':
        review.delete()
        return Response({'delete':f'review {review_pk} deleted'}, status=status.HTTP_204_NO_CONTENT)


    # path('movies/movies/<int:movie_pk>/reviews/', views.create_review),

@api_view(['POST'])
def create_review(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie)
        return Response(serializer.data)