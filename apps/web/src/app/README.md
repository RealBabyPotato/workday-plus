# app

this folder is for top-level frontend setup.

what goes here:

- app providers
- router setup
- query client setup
- app shell and layout wiring

hello-world file:

- `query-client.ts` is the smallest useful tanstack query setup

why this exists:

- every frontend app needs one place for global setup
- it keeps page code focused on product features instead of framework wiring

install:

- no separate install
- install the frontend app from [apps/web](../../README.md)

launch:

- no separate launch
- this setup runs when the frontend starts
