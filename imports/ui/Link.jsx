import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import { Meteor } from 'meteor/meteor';
import LinksList from './LinksList'

export default class Link extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const url = this.refs.url.value.trim();
        e.preventDefault();
        if (url) {
            Links.insert({url, userId: Meteor.userId()});
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                <h1>Your Links</h1>
                <button onClick={() => Accounts.logout()}>Logout</button>
                <LinksList/>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}
