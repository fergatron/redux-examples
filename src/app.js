import React from 'react';
import { connect } from 'react-redux';

const App = (state) => {
  console.info('state', state);
  return (
    <div>
      <h1>Redux Examples</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
