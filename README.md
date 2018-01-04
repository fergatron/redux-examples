# redux-examples
The purpose of this application is to document what the basic building blocks to connect Redux to a React.Js application. Most examples online use that silly `ToDo` app and it goes over my head all the time.

## Install
```
npm install && npm start
```

## Basic structure
```
+-- dist
|   +-- index.html
+-- src
|   +-- reducers
|       +-- index.js
|   +-- app.js
+-- index.js
```
### index.js
The main purpose of this file is to be the root of the application. Node is configured to look for this file as the starting point. As it relates to React there are various key imports happening here:
* **react** - the core library
* **react-dom** - used to render the application to the `div#app` element in `./dist/index.html`.
* **createStore** (redux) - used to create a store and use an initial _state of the application_ from the reducer.
* **applyMiddleware** (redux; optional) - used to add additional tools (ie: redux-logger)
* **Provider** (react-redux) - acts as the bridge between the Redux store and the application. All it does is provides access to the store, it doesn't interact with action creators or reducers directly.

### src/app.js
The purpose of this file is to pull the components together in order for the User to view an application. In this example I'm **connecting** the app to the store.
* **connect** (react-redux) - used as a way for this component to interact with the store, reducers, and action creators.

### src/reducers/index.js
The purpose of this file is to update the store with a new application state. In the root file `index.js` the expected input for `createStore()` is a function that returns the state.
