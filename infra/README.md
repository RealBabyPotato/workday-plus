# infra

this folder is for environment and deployment setup.

what goes here:

- docker files
- deployment config
- local environment helpers later

why this exists:

- infra work should not be mixed into app folders
- this keeps deployment knowledge visible and reviewable

install:

- no separate install
- most team members can ignore this folder until local containers or deployment are added

launch:

- infrastructure is launched only when needed, such as docker postgres from workday-plus/infra/docker/README.md
