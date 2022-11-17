from rest_framework import serializers
from .models import Book, Comment


class BookListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ('title',)



class CommentSerializer(serializers.ModelSerializer):
    class BookSerializer(serializers.ModelSerializer):
        class Meta:
            model = Book
            fields = '__all__'
    # # Q 6.    댓글과 연결된 게시글도 같이 보여주는 기능입니다.
    book = BookSerializer(serializers.ModelSerializer, read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('book',)


class BookSerializer(serializers.ModelSerializer):
    class CommentSerializer(serializers.ModelSerializer):
        class Meta:
            model = Comment
            fields = '__all__'

    comment_set = CommentSerializer(many=True, read_only=True)
    # Q 11. comment count를 하가ㅣ 위한 intergerfield입니다. count 기능을 통해 구현했습니다.
    comment_count = serializers.IntegerField(source='comment_set.count', read_only = True)

    class Meta:
        model = Book
        fields = '__all__'