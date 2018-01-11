# Breaking down the simple example

The purpose of this example is to setup the React app using a real-world folder structure and connect all the pieces.

```
+-- src
    +-- pages
        +-- functional-component.js
    +-- reducers
        +-- index.js
    +-- app.js
+-- index.js
```

See [README](../README.md) for an explanation of `./index.js`, `./src/app.js`, and `./src/reducers/index.js`.

## ./src/pages/functional-component.js
This file is considered a functional component mainly because it doesn't extend React.Component. It's a simply a function that returns its content.

Because we've established the store in `./index.js` the object `state` is available throughout the app. Using redux conventions we've defined a function to map the `state` values to what will eventually become our `props` object of this component.
