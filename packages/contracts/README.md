# contracts

this folder is for shared api contracts later.

what that means:

- shared request and response types
- possibly generated types from the backend api

example file:

- [src/hello.ts](src/hello.ts): a tiny example of a shared response type

why this exists:

- frontend and backend bugs often come from disagreement about data shape
- shared contracts reduce that mismatch
- this becomes more useful once the same api shape is used in multiple places

when to use this folder:

- use it when both frontend and backend need to agree on the same shape
- do not put random frontend helpers here
- do not move everything here too early

install:

- no separate install
- install the app that imports this package

launch:

- no separate launch
- this package is consumed by apps that import shared types
