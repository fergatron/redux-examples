import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchUser } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {} // component state (not application)
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <h1>Redux Examples</h1>
        <p>Welcome { this.props.user.firstName }, you must be from the Store.</p>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUser: fetchUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
