# services

this folder is for backend business logic.

what goes here:

- prerequisite checking
- degree progress logic
- schedule generation logic
- recommendation and planning helpers

hello-world file:

- `hello_service.py` is the smallest example of backend business logic

why this exists:

- this is where the real product rules live
- it gives backend teammates meaningful work beyond basic crud
- it keeps route files small and readable

install:

- no separate install
- install the backend app from [apps/api](../../README.md)

launch:

- no separate launch
- service files are called by backend routes when the api app runs
