from django.http import HttpResponse
from django.shortcuts import render

from hello_reactivated.route_decorator import Route

from . import templates


route = Route()

@route("/")
def index(request):
    return templates.Default(name="World").render(request)
