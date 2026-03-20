from fastapi import APIRouter

from app.schemas.hello import HelloResponse, HealthResponse
from app.services.hello_service import get_demo_message, get_test_message


router = APIRouter()


@router.get("/health", response_model=HealthResponse, tags=["system"])
def health_check() -> HealthResponse:
    return HealthResponse(status="ok")


@router.get("/hello", response_model=HelloResponse, tags=["demo"])
def hello_demo() -> HelloResponse:
    return get_demo_message()

@router.get("/test", response_model=HelloResponse, targs=["test"])
def test_route(id: int) -> HelloResponse:
    return get_test_message(id)