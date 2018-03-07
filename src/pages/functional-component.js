import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// bootstrap
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';

import { fetchUser } from '../actions';

const Functional = (props) => {
  return (
    <div>
      <PageHeader>Simplest Implementation of Redux</PageHeader>
      <p>
        Welcome <strong>{ props.first } { props.last }</strong> to the demo. The simplest implementation of redux I can think of is a functional component. It connects to the store and values are passed to the props object. The first and last name on this page comes from the store.
      </p>

      <Panel>
        <Panel.Heading>
          <Panel.Title>Fetching new values</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          This section calls the <em>fetchUser</em> action, which returns new values to the store. Because the action was dispatched through Redux the React components render with the latest values in the store.
          <Button 
            bsStyle="primary" 
            style={{display: 'block', marginTop: '1em', width: '100%'}}
            onClick={handleClick.bind(this, props)}
          >
            Fetch New Values
          </Button>
        </Panel.Body>
      </Panel>
    </div>
  );
}

const handleClick = (props) => {
  props.fetch();
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

Functional.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Functional);
