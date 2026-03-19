export type HelloResponseContract = {
  message: string
  project: string
  frontend_hint: string
}

/*
this is a very small example of a shared contract.

idea:
- the backend can return this shape
- the frontend can expect this shape
- both sides can import the same type later if the team chooses to wire the package in

keep contract files simple.
they should describe data, not behavior.
*/
