# db

this folder is for database access.

what goes here:

- database connection setup
- sessions
- query helpers
- migration-related wiring later

hello-world files:

- `base.py` defines the shared sqlalchemy base
- `session.py` shows the database engine and session setup

why this exists:

- database code gets messy fast if it is mixed into route files
- this gives one clear place for postgres-related work

install:

- no separate install
- install the backend app from [apps/api](../../README.md)

launch:

- no separate launch
- this code is used by backend database features when the api app runs
