# Rendering components with new props data

In Redux the component will not re-render unless the actionCreator returns a new instance of the application state. Returning `action.payload` is key. When the action is called the `state` object is the current state of the application. You would then either return an entirely new state or merge the two and return it.

```js
Object.assign({}, state, action.payload)
```
Or something to that effect.

## References
1. https://github.com/reactjs/redux/issues/585#issuecomment-132865158
