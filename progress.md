# Project journey via the commit history

## KSM-4791: Single Page React App with Routes and Sass
This project has been modified into a single-page application with smooth navigation using React Routes. There is a consistent navigation bar 
along with dynamic body components that adjust based on the route. 
Sass/SCSS has been added for styling and a Sass transpiler was integrated into Webpack.

## KSM-4657: Setup the Redis Database and learn the basics of it's CLI
-   Open a terminal and start the Redis server by running the following command: ```redis-server```

-   In a new terminal window, start the Redis CLI to interact with the Redis server: ```redis-cli```

1. Use the `SET` command to add data to Redis. The syntax is `SET key value`.

   ```SET name "John Doe"```
  This will set the key "name" with the value "John Doe" in the default database (database 0).

2. Use the `GET` command to retrieve data from Redis. The syntax is `GET key`.

   ```GET name```
  This will return the value associated with the key "name," which is "John Doe" in this case.

3. Use the `DEL` command to remove data from Redis. The syntax is `DEL key`.

   ```DEL name```
  This will delete the key "name" along with its associated value.

4. Redis allows you to work with multiple databases. By default, there are 16 databases numbered from 0 to 15. To switch to a different database, use the `SELECT` command. The syntax is `SELECT index`, where "index" is the database number (0 to 15).

   ```SELECT 1```
  This will switch to database 1, and any subsequent commands will be executed in this database.

Redis is an in-memory key/value store, and any data you add to it will be lost when you stop the Redis server.

## KSM-4641: Create redux actions to fetch and set data on your API
Two Redux actions have been implemented, one for fetching data from the API and another for setting data to modify the API. The API uses a variable to store the data, which means any saved data will be lost upon restarting the API. On the front end, there is a form to input, modify, and display the data.

## KSM-4584: Create an express application for an API
Created a simple API for the training project. It is an express application, separate from the current "server." This new API server serves JSON data instead of UI code/html. A new folder was added in the training application called "api," and within this folder, a file named "api-server.js" has been added.

The new server has the following attributes:

It has two endpoints: ```/get-user/$id``` and ```/set-user/$id```.
The ```/get-user/$id``` endpoint sends back dummy user data in JSON format.
The ```/set-user/$id``` endpoint takes user data in JSON format, processes it, and then sends it back with a flag set.
The server runs on port ```3001```.
To test the API, we used Postman.

## KSM-4447: Modify the first app to use redux
In the existing training project, I installed Redux version 4 and created a subcomponent that displayed some "data." The component has `increase` and `decrease` buttons that, when clicked, fired off the "dispatch" action with data as the payload. The Redux Store updated successfully, and the component displays the new value from the store.

## KSM-4406: Add eslint to the webpack build cycle
ESLint has been enabled in the project. ESlint was added as a package and utilized the `.eslintrc.json` config. An alias has been set up in the package.json to run eslint conveniently. I configured webpack to execute ESLint during the build and watch process, so any potential errors or warnings identified by ESLint are automatically addressed.

Script implementation:
- ```eslint```   package.json script to run ESlint.

## KSM-4229: "Hello KQED" React App
I have integrated React into the existing Node/Express application, using Webpack and Babel to transpile the .jsx code. Package.json scripts were added to facilitate running and transpiling the React application.

Script implementations:
- ```start```   package.json script to alias Node/Express start up
- ```build```   package.json script to alias a single transpile of the React code
- ```watch```   package.json script to alias a watch transpile of the React code

## KSM-4227: Barebones Node/Express App
I have set up a new Node/Express application from scratch without using any framework. This repository will be used to track my progress via commits. The application delivers a 'hello world via React and Redux' page when accessed from `localhost`.

