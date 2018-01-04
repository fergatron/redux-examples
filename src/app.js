import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {} // component state (not application)
  }

  render() {
    console.log(this.state, this.props);
    return (
      <div>
        <h1>Redux Examples</h1>
        <p>Welcome </p>
        <form>
          <label>First Name: </label>
          <input type='text' />
          <button>New store value</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
