# Unhandled JSON Parsing Errors and Missing Input Validation in Express.js
This repository demonstrates a common vulnerability in Express.js applications: failure to handle JSON parsing errors and missing input validation.  The `bug.js` file shows a vulnerable server endpoint.  The `bugSolution.js` file provides a corrected version with robust error handling and validation.

## Vulnerability:
The vulnerable code lacks proper error handling for scenarios where the request body is not valid JSON or is missing required fields. This can lead to application crashes or unexpected behavior.

## Solution:
The solution includes input validation to check for required fields and proper JSON structure.  It also incorporates comprehensive error handling to gracefully manage invalid requests, preventing application crashes and providing informative error responses.

## How to reproduce:
1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the vulnerable server.
5. Send a malformed JSON request (e.g., missing required field or invalid JSON) to `/user` endpoint using a tool like curl or Postman.
6. Observe the server's response or behavior (likely a crash or unexpected output).
7. Run `node bugSolution.js` to start the corrected server and test the improved error handling and input validation.