from rest_framework import serializers
from .models import Movie, Actor, Review

#
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('title','content')
        read_only_fields = ('movie',)

class ActorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Actor
        fields = ('name',)

#
class MovieListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = ('title',)


class MovieSerializer(serializers.ModelSerializer):

    review_set = ReviewSerializer(many=True, read_only=True)
    actors = ActorSerializer(many=True, read_only=True)
    
    class Meta:
        model = Movie
        fields = ('id','actors','review_set','title','overview','release_date','poster_path')

class ActorListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actor
        fields = ('id','name',)


class ActorSerializer(serializers.ModelSerializer):
    movies = MovieListSerializer(many=True, read_only=True)
    
    class Meta:
        model = Actor
        fields = "__all__"

class ReviewListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('title','content',)
        read_only_fields = ('movie',)

class ReviewSerializer(serializers.ModelSerializer):

    class MovieSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = ('title',)
    movie = MovieSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('id','movie','title','content')
        read_only_fields = ('movie',)