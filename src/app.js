import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// bootstrap
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';

// components
import Header from './components/header';

const App = (props) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={12}>
            <Header title='Redux Examples' />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Welcome <strong>{ props.first } { props.last }</strong> to Redux Examples. The purpose of this app is to demonstrate various usages to the state-management tool, Redux.</p>
          </Col>
        </Row>
      </Grid>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    first: state.firstName,
    last: state.lastName
  }
}

App.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string
}

export default connect(mapStateToProps)(App);
