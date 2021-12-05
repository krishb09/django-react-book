from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    watchlist = models.ManyToManyField("Book", related_name="watchers")

class Book(models.Model):
    title = models.CharField(max_length=120)
    author = models.TextField(blank=True)
    read = models.BooleanField(default=False)
    published = models.CharField(max_length=120)

    def _str_(self):
        return self.title

class Comment(models.Model):
    content = models.TextField(blank=True)
    commenter = models.ForeignKey("User", on_delete=models.CASCADE)
    creation_time = models.DateTimeField(auto_now_add=True)
    book = models.ForeignKey("Book", on_delete=models.CASCADE, related_name="comments")

    def __str__(self):
        return self.content
        