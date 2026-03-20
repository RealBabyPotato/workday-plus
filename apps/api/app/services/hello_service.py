import httpx
from app.schemas.hello import HelloResponse, TestResponse


def get_demo_message() -> HelloResponse:
    return HelloResponse(
        message="hello from fastapi",
        project="workday-plus",
        frontend_hint="open the frontend to see tanstack query fetch this route",
    )

def get_test_message(id: int) -> TestResponse: 
    url = f"https://jsonplaceholder.typicode.com/todos/{id}"
    with httpx.Client() as Client:
        data = Client.get(url)
    return TestResponse(**data.json())