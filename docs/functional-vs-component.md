# Get Redux State to work in a functional vs. component
The easiest misconception with developers trying to understand `component state` and `redux state` is the scope of each state. The term `state` is used very loosely. Redux acts as the global store for the entire application. The state of the component is simply scoped to just that component. A functional component doesn't have local state while a React component (a smart component) does have local state.

## Functional
```js
const App = (props) => {
  return (
    <div>
      { props.user.firstName }
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
A smart component handles state differently. Your component just became _self aware_ so now it has both local state and global state. Global state is actually referred to as `props` due to the constructor.

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        { this.props.user.firstName }
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
