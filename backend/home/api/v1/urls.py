from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ImportedFileViewSet,ConsumerOfferViewSet,LoanAccountViewSet,PaymentViewSet,BusinessOwnerDataViewSet,MembershipPlanViewSet,StateViewSet,BillingDetailsViewSet,CountryViewSet,SubscriptionViewSet,CreditorBusinessDataViewSet,CityViewSet,DonationViewSet,RewardViewSet,MerchantAccountViewSet,ContentViewSet,BusinessRuleViewSet,ReportingViewSet,TemplateViewSet,UserActivityViewSet,CampaignViewSet,AddressViewSet,AddressViewSet,BillingDetailsViewSet,BusinessOwnerDataViewSet,BusinessRuleViewSet,CampaignViewSet,CityViewSet,ConsumerOfferViewSet,ContentViewSet,CountryViewSet,CreditorBusinessDataViewSet,DonationViewSet,ImportedFileViewSet,LoanAccountViewSet,MembershipPlanViewSet,MerchantAccountViewSet,PaymentViewSet,ReportingViewSet,RewardViewSet,StateViewSet,SubscriptionViewSet,TemplateViewSet,UserActivityViewSet,AddressViewSet,BillingDetailsViewSet,BusinessOwnerDataViewSet,BusinessRuleViewSet,CampaignViewSet,CityViewSet,ConsumerOfferViewSet,ContentViewSet,CountryViewSet,CreditorBusinessDataViewSet,DonationViewSet,ImportedFileViewSet,LoanAccountViewSet,MembershipPlanViewSet,MerchantAccountViewSet,PaymentViewSet,ReportingViewSet,RewardViewSet,StateViewSet,SubscriptionViewSet,TemplateViewSet,UserActivityViewSet,AddressViewSet,BillingDetailsViewSet,BusinessOwnerDataViewSet,BusinessRuleViewSet,CampaignViewSet,CityViewSet,ConsumerOfferViewSet,ContentViewSet,CountryViewSet,CreditorBusinessDataViewSet,DonationViewSet,ImportedFileViewSet,LoanAccountViewSet,MembershipPlanViewSet,MerchantAccountViewSet,PaymentViewSet,ReportingViewSet,RewardViewSet,StateViewSet,SubscriptionViewSet,TemplateViewSet,UserActivityViewSet

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
router.register('reward', RewardViewSet )
router.register('merchantaccount', MerchantAccountViewSet )
router.register('content', ContentViewSet )
router.register('businessrule', BusinessRuleViewSet )
router.register('reporting', ReportingViewSet )
router.register('template', TemplateViewSet )
router.register('useractivity', UserActivityViewSet )
router.register('campaign', CampaignViewSet )
router.register('address', AddressViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
