from rest_framework import serializers
from .models import Item,video

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description']

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = video
        fields = '__all__'