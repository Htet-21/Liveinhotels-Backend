#API Access Instructions
Base URL
The base URL for all API endpoints is:

###http://localhost:5000/api
Authentication
Before accessing most API endpoints, you need to authenticate and obtain a JSON Web Token (JWT).

##1. Register a New User
Endpoint: POST /api/auth/register
Description: Register a new user.
Request Body:
json
 
{
  "firstName": "Jane",
  "lastName": "Doe",
  "dateOfBirth": "1995-05-15",
  "gender": "Female",
  "email": "jane.doe@example.com",
  "password": "password123"
}
Response: Returns the created user object.

##2. Log In
Endpoint: POST /api/auth/login
Description: Log in to obtain an access token.
Request Body:
json
 
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
Response:
json
 
{
  "accessToken": "your_jwt_token"
}
Note: Use the accessToken from this response for authenticated requests.


#API Endpoints
##Users
##Create User

Endpoint: POST /api/user
Description: Create a new user.
Headers: Authorization: Bearer <your_access_token>
Request Body:
json
 
{
  "firstName": "Jane",
  "lastName": "Doe",
  "dateOfBirth": "1995-05-15",
  "gender": "Female",
  "email": "jane.doe@example.com",
  "password": "your_password"
}
Response: Returns the created user object.
Get User by ID

Endpoint: GET /api/user/:id
Description: Retrieve a user by their ID.
Headers: Authorization: Bearer <your_access_token>
Response: Returns the user object.
Get All Users

Endpoint: GET /api/user
Description: Retrieve all users.
Headers: Authorization: Bearer <your_access_token>
Query Parameters (optional for filtering):
firstName
gender
dateOfBirth
Response: Returns a list of users.
Update User

Endpoint: PUT /api/user/:id
Description: Update a user's details.
Headers: Authorization: Bearer <your_access_token>
Request Body:
json
 
{
  "firstName": "Updated Name",
  "lastName": "Updated Last Name"
}
Response: Confirmation message.
Delete User

Endpoint: DELETE /api/user/:id
Description: Delete a user.
Headers: Authorization: Bearer <your_access_token>
Response: Confirmation message.
Projects
Create Project

Endpoint: POST /api/project
Description: Create a new project.
Headers: Authorization: Bearer <your_access_token>
Request Body:
json
 
{
  "name": "New Project",
  "department": "Development",
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "status": "Active"
}
Response: Returns the created project object.
Get Project by ID

Endpoint: GET /api/project/:id
Description: Retrieve a project by its ID.
Headers: Authorization: Bearer <your_access_token>
Response: Returns the project object.
Get All Projects

Endpoint: GET /api/project
Description: Retrieve all projects.
Headers: Authorization: Bearer <your_access_token>
Response: Returns a list of projects.
Update Project

Endpoint: PUT /api/project/:id
Description: Update a project's details.
Headers: Authorization: Bearer <your_access_token>
Request Body:
json
 
{
  "status": "Completed"
}
Response: Confirmation message.
Delete Project

Endpoint: DELETE /api/project/:id
Description: Delete a project.
Headers: Authorization: Bearer <your_access_token>
Response: Confirmation message.
Timesheets
Create Timesheet

Endpoint: POST /api/timesheet
Description: Create a new timesheet entry.
Headers: Authorization: Bearer <your_access_token>
Request Body:
json
 
{
  "taskName": "Task 1",
  "date": "2024-08-15",
  "hours": 8,
  "userId": 1,
  "projectId": 1
}
Response: Returns the created timesheet object.
Get Timesheet by ID

Endpoint: GET /api/timesheet/:id
Description: Retrieve a timesheet by its ID.
Headers: Authorization: Bearer <your_access_token>
Response: Returns the timesheet object.
Get All Timesheets

Endpoint: GET /api/timesheet
Description: Retrieve all timesheets.
Headers: Authorization: Bearer <your_access_token>
Response: Returns a list of timesheets.
Update Timesheet

Endpoint: PUT /api/timesheet/:id
Description: Update a timesheet entry.
Headers: Authorization: Bearer <your_access_token>
Request Body:
json
 
{
  "hours": 6
}
Response: Confirmation message.
Delete Timesheet

Endpoint: DELETE /api/timesheet/:id
Description: Delete a timesheet entry.
Headers: Authorization: Bearer <your_access_token>
Response: Confirmation message.
User-Project Associations
Assign User to Project
Endpoint: POST /api/userprojects
Description: Assign a user to a project.
Headers: Authorization: Bearer <your_access_token>
Request Body:
json
 
{
  "userId": 1,
  "projectId": 1
}
Response: Confirmation message.


#Testing with Postman
##Register a New User:

Set the method to POST and the URL to http://localhost:5000/api/auth/register.
Add the request body as shown above.

##Log In:

Set the method to POST and the URL to http://localhost:5000/api/auth/login.
Add the request body as shown above.
Use the Access Token:

Copy the accessToken from the login response.
For all authenticated requests, add a header: Authorization: Bearer <your_access_token>.

##Make Requests:

Set the method to POST and the URL to http://localhost:5000/api/project and http://localhost:5000/api/timesheet
Add the request body as shown above.
Use the Access Token:

Use the provided endpoints to test creating, retrieving, updating, and deleting users, projects, timesheets, and user-project associations.
