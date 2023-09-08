from django.contrib import admin
from .models import BillingDetails,BusinessOwnerData,City,ConsumerOffer,Country,CreditorBusinessData,ImportedFile,LoanAccount,MembershipPlan,Payment,State,Subscription
admin.site.register(ImportedFile)
admin.site.register(ConsumerOffer)
admin.site.register(LoanAccount)
admin.site.register(Payment)
admin.site.register(BusinessOwnerData)
admin.site.register(MembershipPlan)
admin.site.register(State)
admin.site.register(BillingDetails)
admin.site.register(Country)
admin.site.register(Subscription)
admin.site.register(CreditorBusinessData)
admin.site.register(City)

# Register your models here.
