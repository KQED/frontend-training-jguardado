# frontend-training-jguardado

This repository will contain the frontend training ticket PRs, part of the KQED Software Engineering Internship program.

# Run

```install npm/yarn```

```yarn start```

Head over to: http://localhost:3000/

## KSM-4447 --> Modify the first app to use redux

As you know each component has it's own state. However, in a large complex application we would like to have a "master" state that can be used across the the entire application.
This "master" state is known as a Redux Store (or just store). Another feature of this paradigm is having an event called "dispatch". When you call "dispatch" you can send data from where ever in your app to the store. When the store updates it will trigger the updates on the components (just like a local state would!)
Install redux for your existing training project:
https://react-redux.js.org/introduction/getting-started
Create a subcomponent in your application
The component should display some "data"
The component should have some sort of "button"
When you click the button it should fire off the "dispatch"
The dispatch should have some sort of data as a payload
The store should update
The component should display the new data from the store
We are using redux 4, do not use redux 3

## KSM-4406 --> Add eslint to the webpack build cycle

enable eslint in your project
add `eslint` as a package and use the `.eslintrc.json` config (get from Jason)
add an alias in your `package.json` to run `eslint`
add a configuration to your webpack so when it builds it also runs eslint
fix any errors/warning eslint gives

## KSM-4229 --> "Hello KQED" React App

Using your Node/Express app setup. Create a simple single component React application. Integrate Webpack and Babel to transpile your .jsx code and have the Node/Express App deliver the React App. Focus on running and setting up from the cli. Track your progress via commits
Required implementations:
- package.json scripts to alias Node/Express start up
- package.json scripts to alias a single transpile of the React code
- package.json scripts to alias a watch transpile of the React code

## KSM-4227 --> Barebones Node/Express App

Setup a node/express application that delivers a 'hello world' page from localhost. Do not use a framework. Write from scratch and create a new git repo. Track your progress via commits. Focus on running and setting up from the cli.
