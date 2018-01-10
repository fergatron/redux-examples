import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// bootstrap
import {
  Col,
  Grid,
  Nav,
  NavItem,
  Row
} from 'react-bootstrap';

// components
import Header from './components/header';

// pages
import Functional from './pages/functional-component';

const Content = () => {
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
            <p>The purpose of this app is to demonstrate various usages to the state-management tool, Redux.</p>
            <Nav bsStyle='pills' activeKey={1}>
              <LinkContainer to='/simple'>
                <NavItem eventKey={1}>Simple (functional component)</NavItem>
              </LinkContainer>
            </Nav>
          </Col>
        </Row>
      </Grid>

    </div>
  );
}

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Content} />
        <Route path='/simple' component={Functional} />
      </Switch>
    </div>
  );
}

export default App;
