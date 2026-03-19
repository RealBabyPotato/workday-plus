# src

this is where the frontend source code lives.

why this exists:

- it keeps actual app code separate from config files
- it gives frontend work a clear layout from day one

install:

- no separate install
- install the frontend app from workday-plus/apps/web/README.md

folders here:

- `api`: frontend calls to the backend
- `app`: app shell, providers, routing setup
- `components`: reusable ui pieces
- `features`: feature-specific code
- `lib`: shared helpers
- `pages`: screen-level components

hello-world path:

1. `pages/HomePage.tsx` renders the main screen
2. `features/hello-world/HelloWorldCard.tsx` runs the query
3. `api/hello.ts` calls the backend
4. `app/query-client.ts` configures tanstack query

launch:

- no separate launch
- this code runs when the frontend app is launched from workday-plus/apps/web/README.md
