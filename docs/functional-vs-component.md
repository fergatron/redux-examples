# Get Redux State to work in a functional vs. component
The easiest misconception with developers trying to understand component state and Redux state is they

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
