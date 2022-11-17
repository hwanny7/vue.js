from rest_framework import serializers
from .models import Collection, Collection_Review, Movie_choice



class CollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collection
        fields = ('__all__')
        read_only_fields = ('user', 'movies', 'like_users')

class CollectionReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collection_Review
        fields = ('__all__')
        read_only_fields = ('users', 'movies', 'collection', 'hate_users')