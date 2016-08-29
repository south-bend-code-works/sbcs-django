from django.shortcuts import render
from main.models import Student

def index(request):
	return render(request, 'index.html')

def about(request):
	return render(request, 'about.html')

def students(request):
	return render(request, 'students.html', {"students": Student.objects.all()})

def codeLegion(request):
	return render(request, 'codeLegion.html')

def press(request):
	return render(request, 'press.html')

def program(request):
	return render(request, 'program.html')

def projects(request):
	return render(request, 'projects.html')

def hour_of_code_instructor(request):
	return render(request, 'hourofcodeinstructors.html')

def contact(request):
	return render(request, 'contact.html')

def apply(request):
	return render(request, 'apply.html')

def apply2(request):
	return render(request, 'apply2.html')
