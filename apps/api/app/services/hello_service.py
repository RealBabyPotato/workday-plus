from app.schemas.hello import HelloResponse


def get_demo_message() -> HelloResponse:
    return HelloResponse(
        message="hello from fastapi",
        project="workday-plus",
        frontend_hint="open the frontend to see tanstack query fetch this route",
    )
