from django.urls import path
from .views import get_items, create_item

urlpatterns = [
    path('items/', get_items),
    path('items/create/', create_item),
]