from fastapi import APIRouter

from app.schemas.hello import HelloResponse, HealthResponse, TestResponse
from app.services.hello_service import get_demo_message, get_test_message


router = APIRouter()


@router.get("/health", response_model=HealthResponse, tags=["system"])
def health_check() -> HealthResponse:
    return HealthResponse(status="ok")


@router.get("/hello", response_model=HelloResponse, tags=["demo"])
def hello_demo() -> HelloResponse:
    return get_demo_message()

@router.get("/test/{id}", response_model=TestResponse, tags=["test"])
def test_route(id: int) -> TestResponse:
    return get_test_message(id)