from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.index, name="home"),
	url(r'^about$', views.about, name="about"),
	url(r'^students$', views.students, name="students"),
	url(r'^students/([0-9]+)$', views.student, name="student"),
	url(r'^codeLegion$', views.codeLegion, name="Code Legion"),
	url(r'^press$', views.press, name="press"),
	url(r'^program$', views.program, name="program"),
	url(r'^projects$', views.projects, name="projects"),
	url(r'^hourofcodeinstructor$', views.hour_of_code_instructor, name="hourofcodeinstructor"),
	url(r'^contact$', views.contact, name="contact"),
	url(r'^apply$', views.apply, name="apply"),
	url(r'^apply2$', views.apply2, name="apply2"),
]
