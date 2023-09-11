from rest_framework import viewsets
from home.models import ImportedFile,ConsumerOffer,LoanAccount,Payment,BusinessOwnerData,MembershipPlan,State,BillingDetails,Country,Subscription,CreditorBusinessData,City,Donation,Reward,MerchantAccount,Content,BusinessRule,Reporting,Template,UserActivity,Campaign,Address,Address,BillingDetails,BusinessOwnerData,BusinessRule,Campaign,City,ConsumerOffer,Content,Country,CreditorBusinessData,Donation,ImportedFile,LoanAccount,MembershipPlan,MerchantAccount,Payment,Reporting,Reward,State,Subscription,Template,UserActivity,Address,BillingDetails,BusinessOwnerData,BusinessRule,Campaign,City,ConsumerOffer,Content,Country,CreditorBusinessData,Donation,ImportedFile,LoanAccount,MembershipPlan,MerchantAccount,Payment,Reporting,Reward,State,Subscription,Template,UserActivity
from .serializers import ImportedFileSerializer,ConsumerOfferSerializer,LoanAccountSerializer,PaymentSerializer,BusinessOwnerDataSerializer,MembershipPlanSerializer,StateSerializer,BillingDetailsSerializer,CountrySerializer,SubscriptionSerializer,CreditorBusinessDataSerializer,CitySerializer,DonationSerializer,RewardSerializer,MerchantAccountSerializer,ContentSerializer,BusinessRuleSerializer,ReportingSerializer,TemplateSerializer,UserActivitySerializer,CampaignSerializer,AddressSerializer,AddressSerializer,BillingDetailsSerializer,BusinessOwnerDataSerializer,BusinessRuleSerializer,CampaignSerializer,CitySerializer,ConsumerOfferSerializer,ContentSerializer,CountrySerializer,CreditorBusinessDataSerializer,DonationSerializer,ImportedFileSerializer,LoanAccountSerializer,MembershipPlanSerializer,MerchantAccountSerializer,PaymentSerializer,ReportingSerializer,RewardSerializer,StateSerializer,SubscriptionSerializer,TemplateSerializer,UserActivitySerializer,AddressSerializer,BillingDetailsSerializer,BusinessOwnerDataSerializer,BusinessRuleSerializer,CampaignSerializer,CitySerializer,ConsumerOfferSerializer,ContentSerializer,CountrySerializer,CreditorBusinessDataSerializer,DonationSerializer,ImportedFileSerializer,LoanAccountSerializer,MembershipPlanSerializer,MerchantAccountSerializer,PaymentSerializer,ReportingSerializer,RewardSerializer,StateSerializer,SubscriptionSerializer,TemplateSerializer,UserActivitySerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class ImportedFileViewSet(viewsets.ModelViewSet):
    serializer_class = ImportedFileSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = ImportedFile.objects.all()

class ConsumerOfferViewSet(viewsets.ModelViewSet):
    serializer_class = ConsumerOfferSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = ConsumerOffer.objects.all()

class LoanAccountViewSet(viewsets.ModelViewSet):
    serializer_class = LoanAccountSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = LoanAccount.objects.all()

class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Payment.objects.all()

class BusinessOwnerDataViewSet(viewsets.ModelViewSet):
    serializer_class = BusinessOwnerDataSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = BusinessOwnerData.objects.all()

class MembershipPlanViewSet(viewsets.ModelViewSet):
    serializer_class = MembershipPlanSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = MembershipPlan.objects.all()

class StateViewSet(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = State.objects.all()

class BillingDetailsViewSet(viewsets.ModelViewSet):
    serializer_class = BillingDetailsSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = BillingDetails.objects.all()

class CountryViewSet(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Country.objects.all()

class SubscriptionViewSet(viewsets.ModelViewSet):
    serializer_class = SubscriptionSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Subscription.objects.all()

class CreditorBusinessDataViewSet(viewsets.ModelViewSet):
    serializer_class = CreditorBusinessDataSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = CreditorBusinessData.objects.all()

class CityViewSet(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = City.objects.all()

class DonationViewSet(viewsets.ModelViewSet):
    serializer_class = DonationSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Donation.objects.all()

class RewardViewSet(viewsets.ModelViewSet):
    serializer_class = RewardSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Reward.objects.all()

class MerchantAccountViewSet(viewsets.ModelViewSet):
    serializer_class = MerchantAccountSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = MerchantAccount.objects.all()

class ContentViewSet(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Content.objects.all()

class BusinessRuleViewSet(viewsets.ModelViewSet):
    serializer_class = BusinessRuleSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = BusinessRule.objects.all()

class ReportingViewSet(viewsets.ModelViewSet):
    serializer_class = ReportingSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Reporting.objects.all()

class TemplateViewSet(viewsets.ModelViewSet):
    serializer_class = TemplateSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Template.objects.all()

class UserActivityViewSet(viewsets.ModelViewSet):
    serializer_class = UserActivitySerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = UserActivity.objects.all()

class CampaignViewSet(viewsets.ModelViewSet):
    serializer_class = CampaignSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Campaign.objects.all()

class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Address.objects.all()
