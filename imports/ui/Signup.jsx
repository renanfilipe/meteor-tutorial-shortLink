import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            error: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();

        if (password.length < 9) {
            return this.setState({error: 'Password must be more than 8 characters long'});
        }

        Accounts.createUser({email, password}, (err) => {
            if (err) {
                this.setState({error: err.reason});
            } else {
                this.setState({error: ''});
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Join Short Link</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit} noValidate>
                    <input type='email' ref='email' name='email' placeholder='email' />
                    <input type='password' ref='password' name='password' placeholder='password'/>
                    <button>Create Account</button>
                </form>
                <Link to="/">Already have an account?</Link>
            </div>
        );
    }
}
