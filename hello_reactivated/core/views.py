from django.http import HttpResponse

from . import templates

# def index(request):
#     html_content = """
#     <html>
#         <body>
#             <h1>Welcome to my website!</h1>
#         </body>
#     </html>
#     """
#     return HttpResponse(html_content)

def index(request):
    return templates.Default(name="World").render(request)
