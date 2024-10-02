from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class MainPageView(APIView):
    def get(self, request):
        # 返回 JSON 响应，假设这是您想要发送给前端的数据
        data = {
            'title': 'Welcome to the Service Page',
            'description': 'This is the homepage powered by Django and served as a RESTful API.',
        }
        return Response(data, status=status.HTTP_200_OK)
