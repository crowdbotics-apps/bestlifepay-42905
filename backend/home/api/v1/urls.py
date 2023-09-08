from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ImportedFileViewSet,ConsumerOfferViewSet,LoanAccountViewSet,PaymentViewSet,ConsumerOfferViewSet,ImportedFileViewSet,LoanAccountViewSet,PaymentViewSet,ConsumerOfferViewSet,ImportedFileViewSet,LoanAccountViewSet,PaymentViewSet,ConsumerOfferViewSet,ImportedFileViewSet,LoanAccountViewSet,PaymentViewSet

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

urlpatterns = [
    path("", include(router.urls)),
]
