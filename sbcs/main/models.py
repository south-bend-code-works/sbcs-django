from __future__ import unicode_literals
from datetime import datetime, timedelta

from django.conf import settings
from django.contrib import admin
from django.db import models

from zipfile import ZipFile

class BioPage(models.Model):
	zipFile = models.FileField(upload_to="biopages")
	
	def save(self, *args, **kwargs):
		with ZipFile(self.zipFile) as zipFile:
			fileNames = zipFile.namelist()
			for fileName in fileNames:
				zipFile.extract(fileName, settings.MEDIA_ROOT + "biopages/")
		super(BioPage, self).save(*args, **kwargs)
	
	@property
	def creator(self):
		return Student.objects.get(bioPage=self)

class Student(models.Model):
	firstName = models.CharField(max_length=50)
	lastName = models.CharField(max_length=50)
	birthday = models.DateTimeField()
	quote = models.CharField(max_length=1000, null=True, blank=True)
	bioPage = models.ForeignKey(BioPage)

	@property
	def isEighteen(self):
		age = datetime.date.today() - self.birthday
		return age.years >= 18

admin.site.register(BioPage)
admin.site.register(Student)
