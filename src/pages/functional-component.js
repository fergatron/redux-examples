import React from 'react';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

const Functional = (props) => {
  console.info('inside Functional', this, props)
  return (
    <div>
      <PageHeader>Simplest Implementation of Redux</PageHeader>
      <p>
        Welcome <strong>{ props.first } { props.last }</strong> to the demo. The simplest implementation of redux I can think of is a functional component. It connects to the store and values are passed to the props object. The first and last name on this page comes from the store.
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    first: state.firstName,
    last: state.lastName
  }
}

export default connect(mapStateToProps)(Functional);
