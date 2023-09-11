from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ImportedFileViewSet,ConsumerOfferViewSet,LoanAccountViewSet,PaymentViewSet,BusinessOwnerDataViewSet,MembershipPlanViewSet,StateViewSet,BillingDetailsViewSet,CountryViewSet,SubscriptionViewSet,CreditorBusinessDataViewSet,CityViewSet,DonationViewSet,BillingDetailsViewSet,BusinessOwnerDataViewSet,CityViewSet,ConsumerOfferViewSet,CountryViewSet,CreditorBusinessDataViewSet,DonationViewSet,ImportedFileViewSet,LoanAccountViewSet,MembershipPlanViewSet,PaymentViewSet,StateViewSet,SubscriptionViewSet,BillingDetailsViewSet,BusinessOwnerDataViewSet,CityViewSet,ConsumerOfferViewSet,CountryViewSet,CreditorBusinessDataViewSet,DonationViewSet,ImportedFileViewSet,LoanAccountViewSet,MembershipPlanViewSet,PaymentViewSet,StateViewSet,SubscriptionViewSet,BillingDetailsViewSet,BusinessOwnerDataViewSet,CityViewSet,ConsumerOfferViewSet,CountryViewSet,CreditorBusinessDataViewSet,DonationViewSet,ImportedFileViewSet,LoanAccountViewSet,MembershipPlanViewSet,PaymentViewSet,StateViewSet,SubscriptionViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('importedfile', ImportedFileViewSet )
router.register('consumeroffer', ConsumerOfferViewSet )
router.register('loanaccount', LoanAccountViewSet )
router.register('payment', PaymentViewSet )
router.register('businessownerdata', BusinessOwnerDataViewSet )
router.register('membershipplan', MembershipPlanViewSet )
router.register('state', StateViewSet )
router.register('billingdetails', BillingDetailsViewSet )
router.register('country', CountryViewSet )
router.register('subscription', SubscriptionViewSet )
router.register('creditorbusinessdata', CreditorBusinessDataViewSet )
router.register('city', CityViewSet )
router.register('donation', DonationViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
