from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str


class HelloResponse(BaseModel):
    message: str
    project: str
    frontend_hint: str

class TestResponse(BaseModel):
    id: int
    title: str

class Course(BaseModel):
    name: str
    credits: int
    title: str
    description: str