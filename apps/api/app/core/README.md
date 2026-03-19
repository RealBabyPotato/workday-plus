# core

this folder is for shared backend setup.

what goes here:

- app settings
- environment variable loading
- security helpers
- startup and config code

hello-world file:

- `config.py` loads settings like frontend origin and database url

why this exists:

- every backend needs a central place for configuration
- it stops secrets and settings logic from being scattered across the app

install:

- no separate install
- install the backend app from [apps/api](../../README.md)

launch:

- no separate launch
- this code is loaded by the backend app on startup
