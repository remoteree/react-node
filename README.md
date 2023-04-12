# Prerequisites:
- Install nodeJS (Run the installer from https://nodejs.org/en), Check if you already have it installed using `node -v`
- Install npm. Check if you have npm installed using `npm -v`
- Install yarn

# Startup Instructions:
1. Start Frontend. 
    - cd into frontend
    - `npm install`
    - use `npm start`
2. Start Server. 
    - cd into backend
    - `npm install`
    - use `node index.js`
3. Go to localhost:3000/ to see the App running :)

# Development instructions:

## Frontend:
1. Make use of the apiHelper.js module's makeCall to make calls to the server. The method takes a request body, request method, and a request url
2. I have imported and install Semantic UI's React library which gives you a lot of nice usable components out of the box for fast development. Check out the components available here: https://react.semantic-ui.com/

### Useful libraries for frontend libraries
* Front-end react routing: https://reactrouter.com/en/main

## Backend:
1. Add API routes to backend/index.js as necessary
2. Add a database connection for your database of choice

### Useful libraries for backend libraries
* Authentication (for user registration and login):https://www.passportjs.org/
