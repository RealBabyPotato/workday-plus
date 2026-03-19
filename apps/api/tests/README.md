# tests

this folder is for backend tests.

what goes here:

- route tests
- service logic tests
- database tests
- validation tests

hello-world file:

- `test_main.py` tests the root and hello endpoints

why this exists:

- backend logic will get complicated
- tests make degree rules and scheduler logic safer to change

install:

- no separate install
- install the backend app from [apps/api](../README.md)

launch:

- run backend tests from `apps/api` with `python -m pytest`
