from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class video(models.Model):
    title = models.CharField(max_length=255)
    video_file = models.FileField(upload_to='videos/')
    thumbnail = models.ImageField(upload_to='thumbnails/', null=True, blank=True)
    channel = models.CharField(max_length=255)
    views= models.CharField(max_length=100)
    user = models.ImageField(upload_to='user/', null=True, blank=True)