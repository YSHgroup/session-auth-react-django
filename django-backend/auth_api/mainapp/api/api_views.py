from rest_framework import generics
from mainapp.models import Book
from .serializers import BookSerializer
class ListBooksAPI(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer