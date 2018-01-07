# Get Redux State to work in a functional vs. component
The easiest misconception with developers trying to understand `component state` and `redux state` is the scope of each state. Redux acts as the global store for the entire application. The state of the component is simply scoped to just that component. A functional component doesn't have local state while a React component (a smart component) does have local state.

## Functional
```.js
const App = (state) => {
  return (
    <div>
      { state.user.firstName }
    </div>
  );
}

const mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App);
```

## React Component
```.js
class App extends Component {
  render() {
    return (
      <div>
        { this.state.user.firstName }
      </div>
    );
  }
}

const mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App);
```

## References
1. https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state/
1. https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops
1. http://blog.tylerbuchea.com/super-simple-react-redux-application-example/
