import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  componentWillReceiveProps(newProps) {
    console.info('new props', newProps);
  }

  render() {
    return (
      <div>
        <h1>Redux Examples</h1>
        <p>Welcome { this.props.user.firstName } { this.props.user.lastName }, you must be from the Store.</p>
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

// used to avert linter, functional without it
App.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
