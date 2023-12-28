# myrestapp/urls.py
from django.urls import path
from .views import ItemListCreateView,VideoListAPIView

urlpatterns = [
    path('items/', ItemListCreateView.as_view(), name='item-list-create'),
    path('videos/', VideoListAPIView.as_view(), name='video-list'),
]
