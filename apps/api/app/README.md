# app

this is where the fastapi application code will live.

why this exists:

- it gives the backend a clean internal structure
- it stops route code, database code, and business logic from getting mixed together

hello-world map:

- `main.py` wires the app together
- `api/routes.py` shows the smallest route example
- `services/hello_service.py` shows where logic belongs
- `schemas/hello.py` shows validation/response types
- `models/course.py` shows what a backend model file looks like

install:

- no separate install
- install the backend app from [api](../README.md)

launch:

- no separate launch
- launch the backend from [apps/api](../README.md)

folders here:

- `api`: request handlers and route definitions
- `core`: config, settings, and shared app setup
- `db`: database session and database helpers
- `models`: database models
- `schemas`: request and response shapes
- `services`: business logic
