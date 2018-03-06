import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

import { fetchUser } from '../actions';

const Functional = (props) => {
  console.info('inside Functional', this, props)
  return (
    <div>
      <PageHeader>Simplest Implementation of Redux</PageHeader>
      <p>
        Welcome <strong>{ props.first } { props.last }</strong> to the demo. The simplest implementation of redux I can think of is a functional component. It connects to the store and values are passed to the props object. The first and last name on this page comes from the store.
      </p>
      <button onClick={handleClick.bind(props)}>
        Fetch new name
      </button>
    </div>
  );
}

const handleClick = () => {
  console.info('clicked the button', this, props);
}

function mapStateToProps(state) {
  return {
    first: state.firstName,
    last: state.lastName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Functional);
