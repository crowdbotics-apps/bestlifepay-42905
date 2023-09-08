from django.contrib import admin
from .models import ConsumerOffer,ImportedFile,LoanAccount,Payment
admin.site.register(ImportedFile)
admin.site.register(ConsumerOffer)
admin.site.register(LoanAccount)
admin.site.register(Payment)

# Register your models here.
