# Rendering components with new props data

With `redux` the React component will not re-render unless the actionCreator returns a new instance of the state. Returning `action.payload` is key. When the actionCreator is called the `state` object is the current state of the application. You would then either return an entirely new state or merge the two and return it.

```js
return state; // this will not invoke a render
return Object.assign({}, state);  // this returns a new object even though it's the same state. It will invoke a render
return Object.assign({}, state, action.payload) // this merges state and the payload into a new object.
```
Or something to that effect.

## References
1. https://github.com/reactjs/redux/issues/585#issuecomment-132865158
