from __future__ import unicode_literals
from datetime import datetime, timedelta
from django.utils import timezone

from django.conf import settings
from django.contrib import admin
from django.db import models

#from zipfile import ZipFile

class BioPage(models.Model):
  link = models.CharField(max_length=250)
  """
  zipFile = models.FileField(upload_to="biopages")
  
  def save(self, *args, **kwargs):
    with ZipFile(self.zipFile) as zipFile:
      fileNames = zipFile.namelist()
      for fileName in fileNames:
        zipFile.extract(fileName, settings.MEDIA_ROOT + "biopages/")
    super(BioPage, self).save(*args, **kwargs)
  """

  def __unicode__(self):
    if self.creator is not None:
      return self.creator.fullName + "'s Personal Biopage"
    return "Unclaimed Bio Page"
  
  @property
  def creator(self):
    try:
      return Student.objects.get(bioPage=self)
    except Exception:
      return None

class Project(models.Model):
  PROJECT_TYPE_CHOICES = (
    (1, 'Class Project'),
    (2, 'Code Legion Project'),
    (3, 'Individual Project'),
  )

  title = models.CharField(max_length=100)
  link = models.CharField(max_length=250)
  projectType = models.IntegerField(choices=PROJECT_TYPE_CHOICES)
  image = models.ImageField(upload_to="projectImages/")
  description = models.CharField(max_length=1000, null=True, blank=True)

  def __unicode__(self):
    return self.title

  @property
  def creators(self):
    projectOwnershipRelationships = ProjectOwnership.objects.filter(project=self)
    return map(lambda x: x.student, projectOwnershipRelationships)

class Student(models.Model):
  firstName = models.CharField(max_length=50)
  lastName = models.CharField(max_length=50)
  birthday = models.DateTimeField()
  quote = models.CharField(max_length=1000, null=True, blank=True)
  bioPage = models.ForeignKey(BioPage)
  image = models.ImageField(upload_to="studentImages/")

  def __unicode__(self):
    return self.fullName

  @property
  def fullName(self):
    return self.firstName + " " + self.lastName

  @property
  def projects(self):
    projectOwnerships = ProjectOwnership.objects.filter(student=self)
    return map(lambda x: x.project, projectOwnerships)

  @property
  def hasProjects(self):
    return len(self.projects) > 0

  @property
  def isEighteen(self):
    now = timezone.now()
    year_diff = now.year - self.birthday.year
    return (year_diff > 18)\
      or (year_diff == 18 and now.month > self.birthday.month)\
      or (year_diff == 18 and now.month == self.birthday.month and now.day >= self.birhday.day)

class ProjectOwnership(models.Model):
  project = models.ForeignKey(Project)
  student = models.ForeignKey(Student)

  def __unicode__(self):
    return self.student.fullName + "'s ownership of " + self.project.title

admin.site.register(BioPage)
admin.site.register(Project)
admin.site.register(Student)
admin.site.register(ProjectOwnership)
