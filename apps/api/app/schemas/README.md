# schemas

this folder is for request and response schemas.

what goes here:

- pydantic models for api input
- pydantic models for api output
- validation rules for payloads

hello-world file:

- `hello.py` shows a basic response schema

why this exists:

- it makes the api safer
- it prevents bad data from moving through the system
- it gives the frontend a stable contract to code against

install:

- no separate install
- install the backend app from [apps/api](../../README.md)

launch:

- no separate launch
- schema files are used automatically when backend routes run
