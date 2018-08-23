import React, { Component } from 'react';
import {Accounts} from "meteor/accounts-base";
import PropTypes from 'prop-types';

export default class PrivateHeader extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={() => Accounts.logout()}>Logout</button>
            </div>
        );
    }
}

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
};
