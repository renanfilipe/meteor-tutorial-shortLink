import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends Component {
    static onLogout() {
        Accounts.logout();
    }

    render() {
        return (
            <div>
                <p>Link</p>
                <button onClick={Link.onLogout}>
                    Logout
                </button>
            </div>
        );
    }
}
