from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    # WARNING!
    """
    Some officially supported features of Crowdbotics Dashboard depend on the initial
    state of this User model (Such as the creation of superusers using the CLI
    or password reset in the dashboard). Changing, extending, or modifying this model
    may lead to unexpected bugs and or behaviors in the automated flows provided
    by Crowdbotics. Change it at your own risk.


    This model represents the User instance of the system, login system and
    everything that relates with an `User` is represented by this model.
    """
    name = models.CharField(null=True,blank=True,max_length=255,)
    userType = models.IntegerField(null=True,blank=True,)
    ssn = models.TextField(null=True,blank=True,max_length=50,)
    birthdate = models.DateField(null=True,blank=True,)
    username = models.TextField(null=True,blank=True,)
    email = models.EmailField(null=True,blank=True,max_length=254,)
    password = models.TextField(null=True,blank=True,)
    authenticationMethod = models.IntegerField(null=True,blank=True,)
    agreeTermsAndConditions = models.BooleanField(null=True,blank=True,)
    accounts = models.ManyToManyField("home.LoanAccount",null=True,blank=True,related_name="user_accounts",)
    offers = models.ManyToManyField("home.ConsumerOffer",null=True,blank=True,related_name="user_offers",)
    payments = models.ManyToManyField("home.Payment",null=True,blank=True,related_name="user_payments",)
    businessData = models.OneToOneField("home.CreditorBusinessData",null=True,blank=True,on_delete=models.CASCADE,related_name="user_businessData",)
    subscription = models.OneToOneField("home.Subscription",null=True,blank=True,on_delete=models.CASCADE,related_name="user_subscription",)
    billingDetails = models.OneToOneField("home.BillingDetails",null=True,blank=True,on_delete=models.CASCADE,related_name="user_billingDetails",)
    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
