from django.conf import settings
from django.db import models
class ImportedFile(models.Model):
    'Generated Model'
    status = models.IntegerField()
    filename = models.TextField()
    uploadedDate = models.DateTimeField()
    uploadedBy = models.OneToOneField("users.User",on_delete=models.CASCADE,related_name="importedfile_uploadedBy",)
    uploadType = models.IntegerField()
    noOfRecords = models.IntegerField()
    noOfRecordsProcessed = models.IntegerField()
class ConsumerOffer(models.Model):
    'Generated Model'
    status = models.IntegerField()
    type = models.IntegerField()
    reason = models.TextField()
    paymentPeriodicity = models.IntegerField()
    paymentAmount = models.FloatField()
    paymentStartDate = models.DateField()
    notes = models.TextField()
class LoanAccount(models.Model):
    'Generated Model'
    number = models.TextField(max_length=50,)
    status = models.IntegerField()
    name = models.TextField()
    originalBalance = models.FloatField()
    saveNowPercentage = models.FloatField()
class Payment(models.Model):
    'Generated Model'
    transactionDate = models.DateTimeField()
    amount = models.FloatField()
    status = models.IntegerField()
