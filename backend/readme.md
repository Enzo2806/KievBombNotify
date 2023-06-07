Hi everyone, here are some api instructions


Test username: "kbndev"
Test password: "1234567"

Use this: {"username": "kbndev", "password":"1234567"}

Endpoints:

1. /login - POST request endpoint for logging in to the application,

Requirements:
a body in this format {"username": actualUsername, "password": actualPassword} 

Returns:
Three important headers with tokens, save all of them in the localStorage. Headers: auth-token (jwt token that expries in 15 minutes), refresh-token (jwt refresh token that expires in a week), id-token (essentially just an id reference for the logged in user)

Error:
A message saying that the password or username is wrong

2. /refresh - authenticated GET request endpoint for refreshing the auth-token that expired 

Requirements: 
an unexpired refresh-token header, and a valid id-token header (the values you got from /login)

Returns:
a fresh auth-token header with a jwt that will, you guessed it, expire in 15 minutes

Error:
When the token is invalid there is a is-token-valid header with a "false" value, and a message

3. /get-districts authenticated GET request endpoint for getting all district info

Requirements:
auth-token header with a valid jwt token

Returns:
Info about districts

Error:
When the token is invalid there is a is-token-valid header with a "false" value, and a message

4. /report/:dynamic-valid-district-name: authenticated PUT request to add a report to designated district

Requirements:
auth-token header with a valid jwt token

Returns:
a 200 status with a report accepted message

Error:
ValidatorError which means user is over the daily limit of reports, or an empty message with a 400 status which means an id is invalid



