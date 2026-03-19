# docker

this folder is for docker-related files later.

what goes here:

- local postgres container setup
- optional multi-service local development

why this exists:

- docker can make onboarding easier once the backend and database are real
- keeping it here avoids polluting app folders with ops files

what is here now:

- `compose.yml` starts only postgres

launch:

mac or windows with docker desktop:

```bash
cd infra/docker
docker compose up -d
```

stop:

```bash
cd infra/docker
docker compose down
```

install:

- no separate install
- use this only if you want postgres in a container
