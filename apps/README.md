# apps

this folder holds the actual product apps.

why this exists:

- it separates runnable apps from docs and scripts
- it gives the team two clear homes: frontend and backend
- it avoids mixing app code with project notes

folders here:

- `web`: the react frontend
- `api`: the fastapi backend
- `solver`: optional later work, not part of lean v1
- `ui`: optional shared ui package, not part of lean v1

install:

- mac and windows: you do not install `apps` by itself
- install either [web](web/README.md) or [api](api/README.md)

launch:

- no separate launch
- launch either the frontend in [web](web/README.md) or the backend in [api](api/README.md)
