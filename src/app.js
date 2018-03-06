import React from 'react';
import { Route, Switch } from 'react-router-dom';

// bootstrap
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';

// components
import Footer from './components/footer';
import Header from './components/header';

// pages
import Functional from './pages/functional-component';
import Home from './pages/home';

const App = (props) => {
  console.info('inside App function', this, props);
  return (
    <div>
      <Header />
      <Grid>
        <Row>
          <Col xs={12}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/simple' component={Functional} />
            </Switch>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
