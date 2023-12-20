from rest_framework import viewsets
from .models import Task
from .serializar import TaskSerializer

class TaskView(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer
