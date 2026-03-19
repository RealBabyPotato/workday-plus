# api

this folder is for fastapi routes.

what goes here:

- endpoints like `/courses`, `/plans`, `/schedule`, `/programs`
- route grouping and versioning

hello-world file:

- `routes.py` contains `/api/health` and `/api/hello`

why this exists:

- it keeps http concerns separate from business logic
- it makes endpoints easier to test and review

install:

- no separate install
- install the backend app from [apps/api](../../README.md)

launch:

- no separate launch
- this code runs when the backend app is launched from [apps/api](../../README.md)
