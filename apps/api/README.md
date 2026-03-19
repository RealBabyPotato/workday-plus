# api

this is the backend app.

what it will do:

- store user plans and schedules
- return courses, sections, and degree rules to the frontend
- run planner logic such as prerequisite checks and schedule generation

why this exists:

- it keeps business logic in one place
- it gives backend-heavy teammates a lot of room to work
- it keeps the frontend thin and focused on user experience

main backend work areas:

- routes
- data models
- validation
- planner logic
- database access
- tests

quick hello-world files:

- `app/main.py`: starts fastapi
- `app/api/routes.py`: basic routes
- `app/services/hello_service.py`: tiny business logic example
- `app/schemas/hello.py`: response shapes
- `app/models/course.py`: very small sql model example

install on mac:

1. install python 3.12 or newer
2. open a terminal in this folder
3. run `cp .env.example .env`
4. run `python3 -m venv .venv`
5. run `source .venv/bin/activate`
6. run `pip install -e ".[dev]"`

install on windows:

1. install python 3.12 or newer
2. open powershell in this folder
3. run `copy .env.example .env`
4. run `py -m venv .venv`
5. run `.venv\Scripts\Activate.ps1`
6. run `pip install -e ".[dev]"`

launch on mac:

```bash
cd apps/api
cp .env.example .env
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

launch on windows powershell:

```powershell
cd apps/api
copy .env.example .env
py -m venv .venv
.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

what you should see:

- `http://127.0.0.1:8000/` returns a basic message
- `http://127.0.0.1:8000/api/hello` returns demo json
- `http://127.0.0.1:8000/docs` shows fastapi swagger docs

database note:

- the backend is wired for postgres, but the demo hello routes do not require the database yet
- that keeps onboarding simple while the team starts building real features

next folders to read:

- [app](app/README.md)
- [tests](tests/README.md)
