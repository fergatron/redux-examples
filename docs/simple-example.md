# Breaking down the simple example

The purpose of this example is to setup the React app using a real-world folder structure and connect all the pieces.

```
+-- src
    +-- actions
        +-- index.js
    +-- pages
        +-- functional-component.js
        +-- home.js
    +-- reducers
        +-- index.js
    +-- app.js
+-- index.js
```

See [README](../README.md) for an explanation of `./index.js`, `./src/app.js`, and `./src/reducers/index.js`.

## ./src/app.js
This file doesn't have any connection to the store. The main function `App` also seems to have **this** with a system-generated value of _undefined_. I can define a **props** variable, but it's just empty.

## ./src/pages/functional-component.js
This file is considered a functional component mainly because it doesn't extend `React.Component`. It's simply a JavaScript function that returns its content.

Because we've established the store in `./index.js` the object `state` is available, but only through redux's `connect` function. Using redux conventions we've defined a function to map the `state` values to what will eventually become our `props` object of this component.

## References
1. https://medium.com/mofed/reduxs-mysterious-connect-function-526efe1122e4