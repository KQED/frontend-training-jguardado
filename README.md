# frontend-training-jguardado

This repository will contain the frontend training ticket PRs, part of the KQED Software Engineering Internship program. 

# Run
```npm i```

```npm install yarn```

```yarn start```

Head over to: ```http://localhost:3000/```

## KSM-4657: Setup the Redis Database and learn the basics of it's CLI
To demonstrate the usage of the Redis CLI, follow these steps:

1. Install Redis: ```https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/```

2. Open a terminal and start the Redis server by running the following command:

   ```redis-server```

3. In a new terminal window, start the Redis CLI to interact with the Redis server:

   ```redis-cli```

4. Use the `SET` command to add data to Redis. The syntax is `SET key value`.

   ```SET name "John Doe"```
  This will set the key "name" with the value "John Doe" in the default database (database 0).

5. Use the `GET` command to retrieve data from Redis. The syntax is `GET key`.

   ```GET name```
  This will return the value associated with the key "name," which is "John" in this case.

6. Use the `DEL` command to remove data from Redis. The syntax is `DEL key`.

   ```DEL name```
  This will delete the key "name" along with its associated value.

7. Redis allows you to work with multiple databases. By default, there are 16 databases numbered from 0 to 15. To switch to a different database, use the `SELECT` command. The syntax is `SELECT index`, where "index" is the database number (0 to 15).

   ```SELECT 1```
  This will switch to database 1, and any subsequent commands will be executed in this database.

  Redis is an in-memory key/value store, and any data you add to it will be lost when you stop the Redis server.

## KSM-4641: Create redux actions to fetch and set data on your API
I have implemented two Redux actions, one for fetching data from the API and another for setting data to modify the API. The API uses a variable to store the data, which means any saved data will be lost upon restarting the API. On the front end, I used a form to input, modify, and display the data.

## KSM-4584: Create an express application for an API
We created a simple API for the training project. It is an express application, separate from the current "server." This new API server serves JSON data instead of UI code/html. We created a new folder in the training application called "api," and within this folder, we added a file named "api-server.js."

The new server has the following attributes:

It has two endpoints: ```/get-user/$id``` and ```/set-user/$id```.
The ```/get-user/$id``` endpoint sends back dummy user data in JSON format.
The ```/set-user/$id``` endpoint takes user data in JSON format, processes it, and then sends it back with a flag set.
The server runs on port ```3001```.
To test the API, we used Postman.

## KSM-4447: Modify the first app to use redux

In my existing training project, I installed Redux version 4 and created a subcomponent that displayed some "data." The component had a "button" that, when clicked, fired off the "dispatch" action with data as the payload. The Redux Store updated successfully, and the component displayed the new data from the store.

## KSM-4406: Add eslint to the webpack build cycle

ESLint has been enabled in the project. I added eslint as a package and utilized the .eslintrc.json config received from Jason. Additionally, I set up an alias in the package.json to run eslint conveniently. Furthermore, I configured webpack to execute ESLint during the build process, so any potential errors or warnings identified by ESLint are automatically addressed.

All identified ESLint errors and warnings have been fixed, ensuring the code meets the linting standards specified in the configuration. The project is now properly set up with ESLint integration to maintain code quality and consistency.

## KSM-4229: "Hello KQED" React App

I have integrated React into the existing Node/Express application, using Webpack and Babel to transpile the .jsx code. I also added package.json scripts to facilitate running and transpiling the React application. Each step of the setup process has been committed, allowing you to track the progress.
Required implementations:
- package.json scripts to alias Node/Express start up
- package.json scripts to alias a single transpile of the React code
- package.json scripts to alias a watch transpile of the React code

## KSM-4227: Barebones Node/Express App

I have set up a new Node/Express application from scratch without using any framework. I created a new git repository to track my progress via commits. The application delivers a 'hello world' page when accessed from localhost.
