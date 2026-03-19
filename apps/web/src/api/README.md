# api

this folder is for frontend api calls.

what goes here:

- functions that call the fastapi backend
- query helpers used with tanstack query

hello-world files:

- `client.ts` is the shared fetch wrapper
- `hello.ts` is the smallest real api call

why this exists:

- it gives one place to manage request urls and response handling
- it stops `fetch` calls from being spread across many components

install:

- no separate install
- install the frontend app from [apps/web](../../README.md)

launch:

- no separate launch
- these functions run when frontend features make api calls
