# contributing

this file explains how to start contributing to workday-plus.

it is written for people who are new to software projects.

## what this project is

workday-plus is a web app for ubc students.

the main idea is to help students:

- track courses they have taken
- understand degree progress
- explore future courses
- build schedules

## first things to read

before writing code, read these:

1. [README.md](README.md)
2. [GIT_README.md](GIT_README.md)
3. [apps/README.md](apps/README.md)
4. [docs/product/mvp-scope.md](docs/product/mvp-scope.md)

if you are working mostly on one area, then also read:

- frontend: [apps/web/README.md](apps/web/README.md)
- backend: [apps/api/README.md](apps/api/README.md)
- docs: [docs/README.md](docs/README.md)

## the big picture

the project currently has:

- one frontend app in `apps/web`
- one backend app in `apps/api`
- docs in `docs`
- future shared contracts in `packages/contracts`

that means most code contributions will happen in either:

- `apps/web`
- `apps/api`

## how to choose what to work on

if you are new, do not start with the hardest feature.

good beginner tasks:

- improve a small frontend component
- add a simple backend route
- write or improve documentation
- add tests for an existing feature
- clean up naming or folder organization

harder tasks:

- degree requirement logic
- prerequisite checking
- auto-scheduling
- database design

if you are unsure, ask which task is a good first contribution.

## how to set up the project

### frontend

from the repo root:

```bash
cd apps/web
npm install
npm run dev
```

this starts the frontend at:

- `http://127.0.0.1:5173`

### backend on mac

from the repo root:

```bash
cd apps/api
cp .env.example .env
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

this starts the backend at:

- `http://127.0.0.1:8000`
- docs: `http://127.0.0.1:8000/docs`

### backend on windows powershell

from the repo root:

```powershell
cd apps/api
copy .env.example .env
py -m venv .venv
.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

## how to make your first change

the normal workflow is:

1. make sure your local `main` is up to date
2. create a new branch
3. make a small change
4. test it if possible
5. commit it
6. push it
7. open a pull request

## branch workflow

from the repo root:

```bash
git switch main
git pull
git switch -c yourname/short-feature-name
```

example:

```bash
git switch -c jaden/add-course-card
```

## where to put your code

### if you are working on the frontend

look in:

- `apps/web/src/pages` for page-level screens
- `apps/web/src/features` for feature-specific logic
- `apps/web/src/components` for reusable ui pieces
- `apps/web/src/api` for frontend api calls

### if you are working on the backend

look in:

- `apps/api/app/api` for routes
- `apps/api/app/schemas` for request and response shapes
- `apps/api/app/services` for business logic
- `apps/api/app/models` for database models
- `apps/api/tests` for backend tests

## examples you can copy

frontend example:

- [apps/web/src/features/hello-world/HelloWorldCard.tsx](apps/web/src/features/hello-world/HelloWorldCard.tsx)

backend example:

- [apps/api/app/api/routes.py](apps/api/app/api/routes.py)
- [apps/api/app/services/hello_service.py](apps/api/app/services/hello_service.py)
- [apps/api/app/schemas/hello.py](apps/api/app/schemas/hello.py)

docs example:

- [docs/api/courses-list-example.md](docs/api/courses-list-example.md)
- [docs/architecture/0001-single-fastapi-app.md](docs/architecture/0001-single-fastapi-app.md)

## how to test your work

frontend:

- at minimum, run the frontend and check the page you changed

backend:

```bash
cd apps/api
source .venv/bin/activate
python -m pytest
```

windows powershell:

```powershell
cd apps/api
.venv\Scripts\Activate.ps1
python -m pytest
```

if you cannot run a test, say that clearly in your pull request.

## what a good contribution looks like

a good contribution is:

- small enough to review
- focused on one task
- explained clearly
- placed in the right folder
- tested if possible

examples:

- add one backend route and its schema
- improve one page layout
- document one endpoint
- add one test file

## what to avoid

please avoid:

- working directly on `main`
- making many unrelated changes in one branch
- moving lots of files without explaining why
- committing `.env` files, secrets, or local setup files
- rewriting large parts of the project without discussion

## how to commit your work

check what changed:

```bash
git status
git diff
```

then commit:

```bash
git add .
git commit -m "add basic course route"
```

then push:

```bash
git push -u origin yourname/short-feature-name
```

## how to write a pull request

keep it simple.

say:

- what you changed
- why you changed it
- how you tested it
- anything that is still unfinished

example:

- added a basic `get /api/courses` route
- added response schema and service function
- tested with `python -m pytest`
- filtering is still very basic

## if you are stuck

if you are stuck:

1. run `git status`
2. read the readme for the folder you are in
3. look at the hello-world examples
4. ask early instead of waiting too long

getting stuck is normal. waiting too long to ask for help is the bigger problem.

## final advice

- start small
- read before editing
- use branches
- keep changes focused
- test what you can
- ask questions early

that is enough to be a good contributor on this project.
