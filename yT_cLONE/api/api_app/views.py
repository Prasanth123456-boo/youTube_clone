# myrestapp/views.py
from rest_framework import generics
from rest_framework.generics import ListAPIView
from .models import Item,video
from .serializers import ItemSerializer,VideoSerializer

class ItemListCreateView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    
class VideoListAPIView(generics.ListCreateAPIView):
    queryset = video.objects.all()
    serializer_class = VideoSerializer
