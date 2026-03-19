# web

this is the frontend app.

what it will do:

- let students search courses and sections
- show schedules and plans
- call the backend api
- display saved degree progress

why this exists:

- it is the user-facing part of the product
- it keeps ui work separate from backend logic
- tanstack query lives here so data fetching stays clean as the app grows

quick hello-world files:

- `src/main.tsx`: app entry
- `src/app/query-client.ts`: tanstack query setup
- `src/api/hello.ts`: basic backend fetch function
- `src/features/hello-world/HelloWorldCard.tsx`: query example
- `src/pages/HomePage.tsx`: page-level ui

install on mac:

1. install node.js 20 or newer
2. open a terminal in this folder
3. run `npm install`
4. copy `.env.example` to `.env` if you want a custom api url
5. run `npm run dev`

install on windows:

1. install node.js 20 or newer
2. open powershell in this folder
3. run `npm install`
4. copy `.env.example` to `.env` if you want a custom api url
5. run `npm run dev`

launch on mac:

```bash
cd apps/web
npm install
npm run dev
```

launch on windows powershell:

```powershell
cd apps/web
npm install
npm run dev
```

what to expect:

- vite gives a fast local dev server
- react builds the ui
- tailwind keeps styling simple
- tanstack query keeps api state manageable
- if the backend is running, the page will show the message from `/api/hello`
- if the backend is not running, the page will show a small error state

next folders to read:

- [src](src/README.md)
