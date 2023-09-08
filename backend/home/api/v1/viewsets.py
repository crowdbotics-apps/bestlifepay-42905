from rest_framework import viewsets
from home.models import ImportedFile,ConsumerOffer,LoanAccount,Payment,ConsumerOffer,ImportedFile,LoanAccount,Payment,ConsumerOffer,ImportedFile,LoanAccount,Payment
from .serializers import ImportedFileSerializer,ConsumerOfferSerializer,LoanAccountSerializer,PaymentSerializer,ConsumerOfferSerializer,ImportedFileSerializer,LoanAccountSerializer,PaymentSerializer,ConsumerOfferSerializer,ImportedFileSerializer,LoanAccountSerializer,PaymentSerializer
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
