import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

const Header = (props) => {
  return (
    <div>
      <PageHeader>{ props.title }</PageHeader>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
