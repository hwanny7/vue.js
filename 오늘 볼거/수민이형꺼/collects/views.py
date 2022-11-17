from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import CollectionSerializer, CollectionReviewSerializer
from .models import Collection, Collection_Review, Movie_choice
from movies.models import Movie
from collects import serializers
from django.contrib.auth import get_user_model
# Create your views here.

@api_view(['GET', 'POST']) # 이게 있어야 홈페이지랑 postman에서 처리가 가능
def collection(request, movie_pk):
    if request.method == 'GET':
        # collections = get_list_or_404(Collection) 없을 경우 error 방지
        collections = Collection.objects.all() 
        serializers = CollectionSerializer(collections, many=True)
        return Response(serializers.data)

    elif request.method == 'POST':
        movie = get_object_or_404(Movie, pk=movie_pk)
        user = get_object_or_404(get_user_model(), pk = 1)
        serializers = CollectionSerializer(data=request.data)
        if serializers.is_valid(raise_exception=True): # 만약 valid 하지 않다면 어떻게 return?
            serializers.user = user
            serializers.movies = movie
            serializers.save()  
            return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)
