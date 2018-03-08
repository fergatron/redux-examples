import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// bootstrap
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Redux Examples</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/simple'>
            <NavItem eventKey={1}>Simple</NavItem>
          </LinkContainer>
          <LinkContainer to='/shopping'>
            <NavItem eventKey={2}>Shopping List</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
