# workday-plus

workday-plus is a lean monorepo for a ubc course planning web app.

the goal of this structure is to keep the project simple:

- one frontend app
- one backend app
- one shared place for api contracts later
- one place for docs, scripts, and tests

we are intentionally not splitting this into many services yet. that keeps setup easier for first-year students and gives the team one shared mental model.

## stack

- frontend: react + typescript + vite + tailwind + tanstack query
- backend: python + fastapi + pydantic
- database: postgresql
- database tooling: sqlalchemy
- testing: vitest, pytest, playwright

## why tanstack query is here (for nerds)

we kept tanstack query because this app will fetch a lot of server data:

- courses
- sections
- degree rules
- schedules
- saved plans

you can do this with plain `fetch`, but tanstack query makes loading, errors, caching, and refetching much less messy once the app grows past a few pages.

## repo shape

```text
apps/
  api/          fastapi backend
  web/          react frontend
  solver/       optional later work, not part of lean v1
  ui/           optional shared ui package, not part of lean v1
packages/
  contracts/    shared api types and schemas later
infra/
  docker/       local containers later
docs/
  product/      feature scope and requirements
  architecture/ design decisions and system notes
  api/          endpoint docs
scripts/
  setup/        local setup helpers later
  seed/         dev seed data later
  import/       data import helpers later
tests/
  e2e/          end-to-end tests
```

## install on mac

1. install node.js 20 or newer
2. install python 3.12 or newer
3. install postgresql 16 or newer !!! OPTIONAL FOR NOW
4. install git

easy options:

- node: official installer from nodejs.org
- python: official installer from python.org
- postgres: postgres.app or postgresql.org installer
- optional package manager route: `brew install node python@3.12 postgresql@16`

## install on windows

1. install node.js 20 or newer from nodejs.org
2. install python 3.12 or newer from python.org
3. install postgresql 16 or newer from postgresql.org
4. install git from git-scm.com

recommended windows note:

- during python install, check "add python to path"

## what to install right now

frontend:

```bash
cd apps/web
npm install
```

backend:

```bash
cd apps/api
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

windows powershell:

```powershell
cd apps/api
py -m venv .venv
.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
```

## how to launch everything

frontend:

```bash
cd apps/web
npm install
npm run dev
```

backend:

```bash
cd apps/api
cp .env.example .env
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

windows powershell backend:

```powershell
cd apps/api
copy .env.example .env
py -m venv .venv
.venv\Scripts\Activate.ps1
pip install -e ".[dev]"
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

optional postgres with docker:

```bash
cd infra/docker
docker compose up -d
```

then open:

- frontend: `http://127.0.0.1:5173`
- backend docs: `http://127.0.0.1:8000/docs`
- backend hello route: `http://127.0.0.1:8000/api/hello`

## how to use this repo

- read [apps/README.md](apps/README.md) to see where product code lives
- read [docs/README.md](docs/README.md) for planning and architecture notes
- read [tests/README.md](tests/README.md) for test structure

## team note

yes, there is plenty of backend work without adding more backend services. good backend work includes:

- course and section data models
- degree requirement logic
- prerequisite checking
- planner and schedule generation logic
- auth and saved user plans
- import scripts for ubc data
- testing and api design

that means many people can work on backend features inside one fastapi app without making the architecture more confusing.

## docker note

right now, i do not think you should fully dockerize frontend + backend + db.

why:

- native frontend and backend dev is easier to debug
- hot reload is simpler
- ppl usually struggle more with docker errors than with `npm run dev` and `python -m uvicorn`

the good compromise is:

- run frontend natively
- run backend natively
- use docker only for postgres if people do not want to install postgres locally
