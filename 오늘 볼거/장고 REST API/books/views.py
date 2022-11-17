from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import BookListSerializer, BookSerializer, CommentSerializer
from .models import Book, Comment
from books import serializers

@api_view(['GET', 'POST'])
def book_list(request):
    # Q 1.  request get 메소드가 요청됐을 때 get_list를 통해 book list를 전달 받고, serializers에 담아서 출력했습니다.
    if request.method == 'GET':
        books = get_list_or_404(Book)
        serializers = BookListSerializer(books, many= True)
        return Response(serializers.data)

    # Q 2.  post 메소드가 요청 됐을 때 유효성 검사를 실시했으며, 문제가 있을 시 raise 기능을 통해 오류를 표시하도록 했습니다. 
    elif request.method == 'POST':
        serializers = BookSerializer(data=request.data)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'DELETE', 'PUT'])
def book_detail(request, book_pk):
    book = get_object_or_404(Book, pk = book_pk)
    # Q 3.  book detail 생성 함수입니다.
    if request.method == 'GET':
        serializers = BookSerializer(book)
        return Response(serializers.data)
    # Q 4.  delete 메소드가 요청됐을 때 삭제하는 기능입니다.
    elif request.method == 'DELETE':
        book.delete()
        return Response({'delete':f'{book_pk}'})

    # Q 5.  게시글 수정 시 함수입니다. 게시글 필드의 일부분만 수정해도 수정이 되도록 partial을 True로 설정했습니다.
    elif request.method == 'PUT':
        serializers = BookSerializer(book, data=request.data, partial=True)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data)


@api_view(['GET'])
def comment_list(request):
    # Q 7.      comment list를 전달하는 함수입니다. 여러개를 전달하니 many는 true로 설정했습니다. 
    comments = get_list_or_404(Comment)
    serializers = CommentSerializer(comments, many=True)
    return Response(serializers.data)


@api_view(['POST'])
def comment_create(request, book_pk):
    # Q 8.      게시글 생성함수입니다. 생성이 성공했을 시 status를 통해 201을 반환하도록 했습니다. 
    book = get_object_or_404(Book, pk = book_pk)
    serializers = CommentSerializer(data=request.data)
    if serializers.is_valid(raise_exception=True):
        serializers.save(book = book)
        return Response(serializers.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'DELETE'])
def comment_detail(request, comment_pk):
    comment = get_object_or_404(Comment, pk=comment_pk)
    # Q 9.       댓글 단일 조회 시 함수입니다.
    if request.method == 'GET':
        serializers = CommentSerializer(comment)
        return Response(serializers.data)
    # Q 10.     댓글 삭제 시 함수입니다.
    elif request.method == 'DELETE':
        comment.delete()
        return Response({'delete':f'{comment_pk}'})

