# packages

this folder is for shared code used by more than one app.

why this exists:

- shared code belongs here, not copied into multiple apps
- it keeps the monorepo clean if common types or helpers appear later

for the lean version, only `contracts` matters.

install:

- no separate install
- install the app that uses the package

launch:

- no separate launch
- shared packages are used by apps that import them
