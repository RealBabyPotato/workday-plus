from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_root() -> None:
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["message"] == "workday-plus api is running"


def test_hello() -> None:
    response = client.get("/api/hello")
    assert response.status_code == 200
    assert response.json()["message"] == "hello from fastapi"
