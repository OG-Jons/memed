# user - endpoints

## /auth/register

Expects:

```json
{
  "username": "string",
  "name": "string",
  "password": "string"
}
```

Returns:

- 400 Bad Request if username is already taken or malformed body
- 500 Internal Server Error if anything else like hashing or so failed
- 204 No Content if everything went alright

## /auth/login

Expects:

```json
{
  "username": "string",
  "password": "string"
}
```

Returns:

- 400 Bad Request for malformed body
- 401 Unauthorized for invalid credentials
- 500 Internal Server Error for hashing errors etc.
- 200 OK for successful login

```json
{
  "accessToken": "string"
}
```

A cookie with the name `refreshToken`.

## /auth/check/username/:username

Expects:

Parameters `:username`

Returns:

- 500 Internal Server Error when not able to access the database
- 200 OK with the result

```json
{
  "valid": false
}
```

## /auth/refresh

Expects:

- Cookie with the name `refreshToken` containing a valid refresh token.

Returns:

- 400 Bad Request if cookie is missing
- 401 Unauthorized if refresh token is expired
- 500 Internal Server Error if JWT validation failed
- 200 OK if a new access token has been created

```json
{
  "accessToken": "string"
}
```

## /auth/logout

Expects:

- Cookie with the name `refreshToken` containing a valid refresh token.

Returns:

- 400 Bad Request if cookie is missing
- 401 Unauthorized if refresh token is expired
- 204 No Content if cookie `refreshToken` has been cleared
