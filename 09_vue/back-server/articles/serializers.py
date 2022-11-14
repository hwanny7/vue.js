from rest_framework import serializers
from .models import Article, Comment


class ArticleListSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Article
        # fields = ('id', 'title', 'content')
        fields = ('id', 'title', 'content', 'user', 'username')


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('article',)


class ArticleSerializer(serializers.ModelSerializer): 
    comment_set = CommentSerializer(many=True, read_only=True)   # 만약에 comment가 없는 article인 경우에 오류가 생기기 때문에 read_only를 True로 해야 오류가 생기지 않는다.
    comment_count = serializers.IntegerField(source='comment_set.count', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ('user', )



