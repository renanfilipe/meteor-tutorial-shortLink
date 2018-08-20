import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();

        Accounts.createUser({email, password}, (err) => {
            console.log(err);
            if (err) {
                this.setState({
                    error: 'something went wrong',
                });
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Join Short Link</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit}>
                    <input type='email' ref='email' name='email' placeholder='email' />
                    <input type='password' ref='password' name='password' placeholder='password'/>
                    <button>Create Account</button>
                </form>
                <Link to="/">Already have an account?</Link>
            </div>
        );
    }
}
