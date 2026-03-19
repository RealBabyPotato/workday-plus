# 0001: keep one fastapi backend app

status: accepted

## context

the team wants a frontend, backend, database support, and possibly solver logic later.

many student teams split too early into many services because it sounds more advanced. that often makes the project harder to understand, harder to run, and harder to debug.

## decision

we will keep one main fastapi backend app for now.

## why

- the team is still early in the project
- one app is easier to explain to new members
- one app is easier to run locally
- one app still allows lots of backend work
- most of the current product logic is tightly related anyway

## consequences

good:

- simpler local setup
- simpler deployment
- easier api design
- less duplicated code

bad:

- the codebase can become messy if folders are not organized well
- some teams may feel there is "not enough backend," even though there usually is

## how we reduce the risk

we organize backend work by domain and by layer:

- routes
- schemas
- services
- models
- db
- tests

that gives multiple backend contributors real ownership without needing separate services.

## revisit later if

- schedule generation becomes much more complex
- heavy async jobs appear
- deployment becomes too slow or too coupled

until then, keep the architecture lean.
