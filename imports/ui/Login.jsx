import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Meteor } from "meteor/meteor";

export default class Login extends Component {
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

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                this.setState({error: 'Unable to login. Check email and password.'});
            } else {
                this.setState({error: ''});
            }
        });

    }

    render() {
        return (
            <div>
                <h1>Short Link</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit} noValidate>
                    <input type='email' ref='email' name='email' placeholder='email' />
                    <input type='password' ref='password' name='password' placeholder='password'/>
                    <button>Login</button>
                </form>
                login from here <Link to="/signup">Have an account?</Link>
            </div>
        );
    }
}
