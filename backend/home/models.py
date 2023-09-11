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
    payments = models.ManyToManyField("home.Payment",null=True,blank=True,related_name="loanaccount_payments",)
class Payment(models.Model):
    'Generated Model'
    transactionDate = models.DateTimeField()
    amount = models.FloatField()
    status = models.IntegerField()
class BusinessOwnerData(models.Model):
    'Generated Model'
    firstName = models.TextField()
    lastName = models.TextField()
    phone = models.TextField()
    percentOwned = models.IntegerField()
    jobTitle = models.TextField()
    address = models.OneToOneField("home.Address",on_delete=models.CASCADE,null=True,blank=True,related_name="businessownerdata_address",)
class MembershipPlan(models.Model):
    'Generated Model'
    name = models.TextField()
    description = models.TextField()
    monthlyPrice = models.FloatField()
    anualPrice = models.FloatField()
class State(models.Model):
    'Generated Model'
    name = models.TextField()
class BillingDetails(models.Model):
    'Generated Model'
    nameOnCheck = models.TextField()
    routingNumber = models.TextField()
    accountNumer = models.TextField()
    achFormat = models.TextField()
    accountType = models.IntegerField()
    cardNumber = models.TextField()
    cardHoldername = models.TextField()
    billAddrFirstname = models.TextField()
    billAddrLastname = models.TextField()
    billAddress = models.OneToOneField("home.Address",on_delete=models.CASCADE,null=True,blank=True,related_name="billingdetails_billAddress",)
    address = models.OneToOneField("home.Address",on_delete=models.CASCADE,null=True,blank=True,related_name="billingdetails_address",)
class Country(models.Model):
    'Generated Model'
    name = models.TextField()
class Subscription(models.Model):
    'Generated Model'
    status = models.IntegerField()
    lastPaymentDate = models.DateField()
    nextPaymentDate = models.DateField()
    plan = models.OneToOneField("home.MembershipPlan",on_delete=models.CASCADE,related_name="subscription_plan",)
class CreditorBusinessData(models.Model):
    'Generated Model'
    businessType = models.IntegerField()
    businessName = models.TextField()
    legalBusinessName = models.TextField()
    companyEmail = models.EmailField(max_length=254,)
    taxIdNumber = models.TextField()
    phone = models.TextField()
    companyWebsite = models.URLField()
    ownerData = models.OneToOneField("home.BusinessOwnerData",null=True,blank=True,on_delete=models.CASCADE,related_name="creditorbusinessdata_ownerData",)
    address = models.OneToOneField("home.Address",on_delete=models.SET_NULL,null=True,blank=True,related_name="creditorbusinessdata_address",)
class City(models.Model):
    'Generated Model'
    name = models.TextField()
class Donation(models.Model):
    'Generated Model'
    amount = models.FloatField()
class Reward(models.Model):
    'Generated Model'
    amount = models.FloatField()
class MerchantAccount(models.Model):
    'Generated Model'
    name = models.TextField()
class Content(models.Model):
    'Generated Model'
    image = models.ImageField(upload_to="content/image/images/",)
    content = models.TextField()
class BusinessRule(models.Model):
    'Generated Model'
    name = models.TextField()
class Reporting(models.Model):
    'Generated Model'
    name = models.TextField()
class Template(models.Model):
    'Generated Model'
    name = models.TextField()
class UserActivity(models.Model):
    'Generated Model'
    user = models.OneToOneField("users.User",on_delete=models.CASCADE,related_name="useractivity_user",)
    datetime = models.DateTimeField()
    log = models.TextField()
class Campaign(models.Model):
    'Generated Model'
    name = models.TextField()
class Address(models.Model):
    'Generated Model'
    city = models.OneToOneField("home.City",on_delete=models.CASCADE,related_name="address_city",)
    state = models.OneToOneField("home.State",on_delete=models.CASCADE,related_name="address_state",)
    country = models.OneToOneField("home.Country",on_delete=models.CASCADE,related_name="address_country",)
    zipCode = models.TextField()
    address1 = models.TextField()
    address2 = models.TextField()
