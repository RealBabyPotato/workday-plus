# system overview

this file shows what a short high-level architecture note can look like.

## current system

the project currently uses one frontend and one backend.

## major pieces

### frontend

- react
- typescript
- vite
- tailwind
- tanstack query

responsibility:

- render the user interface
- collect user input
- call the backend api
- display schedules, plans, and degree progress

### backend

- python
- fastapi
- pydantic
- sqlalchemy

responsibility:

- expose api routes
- validate incoming data
- run business logic
- talk to the database

### database

- postgresql

responsibility:

- store users
- store course data
- store degree rules
- store saved plans and schedules

## request flow example

1. frontend page asks for course data
2. tanstack query calls a frontend api helper
3. frontend helper sends a request to fastapi
4. fastapi route validates input
5. fastapi service runs business logic
6. backend returns json
7. frontend renders the result

## why this shape is good for now

- simple to understand
- easy to run locally
- easy to divide among students
- enough structure for real backend work

## what we are deliberately not doing yet

- multiple backend services
- message queues
- redis
- separate scheduler service
- full dockerized local development

those things might become useful later, but they would add confusion right now.
