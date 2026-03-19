# src

this is where shared contract source files will live.

why this exists:

- it gives one clear source of truth for shared api shapes
- that becomes useful once both frontend and backend are moving quickly

example file:

- [hello.ts](hello.ts): a simple shared response contract

what a contract file should contain:

- plain types or interfaces
- names that match backend responses clearly
- no frontend ui logic
- no backend database logic

install:

- no separate install
- install the parent package from [packages/contracts](../README.md)

launch:

- no separate launch
- source files here are imported through the contracts package
