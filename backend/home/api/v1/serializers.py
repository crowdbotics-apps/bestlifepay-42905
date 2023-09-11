from django.contrib.auth import get_user_model
from home.models import ImportedFile,ConsumerOffer,LoanAccount,Payment,BusinessOwnerData,MembershipPlan,State,BillingDetails,Country,Subscription,CreditorBusinessData,City,Donation,Reward,MerchantAccount,Content,BusinessRule,Reporting,Template,UserActivity,Campaign,BillingDetails,BusinessOwnerData,BusinessRule,Campaign,City,ConsumerOffer,Content,Country,CreditorBusinessData,Donation,ImportedFile,LoanAccount,MembershipPlan,MerchantAccount,Payment,Reporting,Reward,State,Subscription,Template,UserActivity
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer


User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            }
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            name=validated_data.get('name'),
            username=generate_unique_username([
                validated_data.get('name'),
                validated_data.get('email'),
                'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm

class ImportedFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ImportedFile
        fields = "__all__"

class ConsumerOfferSerializer(serializers.ModelSerializer):

    class Meta:
        model = ConsumerOffer
        fields = "__all__"

class LoanAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = LoanAccount
        fields = "__all__"

class PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Payment
        fields = "__all__"

class BusinessOwnerDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = BusinessOwnerData
        fields = "__all__"

class MembershipPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = MembershipPlan
        fields = "__all__"

class StateSerializer(serializers.ModelSerializer):

    class Meta:
        model = State
        fields = "__all__"

class BillingDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = BillingDetails
        fields = "__all__"

class CountrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Country
        fields = "__all__"

class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription
        fields = "__all__"

class CreditorBusinessDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = CreditorBusinessData
        fields = "__all__"

class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = "__all__"

class DonationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Donation
        fields = "__all__"

class RewardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reward
        fields = "__all__"

class MerchantAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = MerchantAccount
        fields = "__all__"

class ContentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Content
        fields = "__all__"

class BusinessRuleSerializer(serializers.ModelSerializer):

    class Meta:
        model = BusinessRule
        fields = "__all__"

class ReportingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reporting
        fields = "__all__"

class TemplateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Template
        fields = "__all__"

class UserActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = UserActivity
        fields = "__all__"

class CampaignSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campaign
        fields = "__all__"
