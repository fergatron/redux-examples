import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// bootstrap
import PageHeader from 'react-bootstrap/lib/PageHeader';

const ShoppingList = (props) => {
    return (
        <Fragment>
            <PageHeader>The Shopping List</PageHeader>
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        state: state
    };
}

export default connect(mapStateToProps, null)(ShoppingList);