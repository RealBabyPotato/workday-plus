# get courses example

this file shows what a good api entry can look like.

## route

`get /api/courses`

## purpose

return a list of courses that the frontend can show in course search or planning pages.

## query parameters

- `subject`: optional, example `cpsc`
- `search`: optional free-text search, example `software`
- `limit`: optional max number of results

## example request

```http
get /api/courses?subject=cpsc&search=software&limit=20
```

## example success response

```json
{
  "items": [
    {
      "code": "CPSC 210",
      "title": "software construction",
      "credits": 4
    },
    {
      "code": "CPSC 310",
      "title": "software engineering",
      "credits": 4
    }
  ],
  "total": 2
}
```

## example error responses

`400 bad request`

use this when the query parameters are invalid.

example:

```json
{
  "detail": "limit must be between 1 and 100"
}
```

`500 internal server error`

use this when the backend fails unexpectedly.

## frontend notes

- this route is a good fit for tanstack query
- cache key could include `subject`, `search`, and `limit`
- empty results should not be treated as an error

## backend notes

- validate query params with pydantic
- keep the route thin
- put filtering logic in a service
- add tests for empty, normal, and invalid cases
