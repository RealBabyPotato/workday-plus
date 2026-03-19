# api entry template

copy this file when documenting a new endpoint.

## route

`method /api/example`

## purpose

what does this endpoint do, in one or two sentences?

## request

- path params:
- query params:
- body:

## example request

```http
get /api/example
```

## example success response

```json
{
  "example": true
}
```

## error cases

- `400` for invalid input
- `404` if the resource does not exist
- `500` for unexpected server errors

## frontend notes

- how should the frontend use this?

## backend notes

- what validation, service logic, or tests are important?
