import { Meteor } from 'meteor/meteor';
import React from 'react';
import Link from '../ui/Link'
import Signup from "../ui/Signup";
import Login from "../ui/Login";
import NotFound from "../ui/NotFound";
import { Router, Route, Switch, Redirect } from 'react-router';
import history from '../api/history';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = (Component) => {
    if (Meteor.userId()) {
        return <Redirect to="/links" />
    } else {
        return <Component />
    }
};

const onEnterPrivatePage = (Component) => {
    if (!Meteor.userId()) {
        return <Redirect to="/" />
    } else {
        return <Component />
    }
};

export const onAuthChange = (isAuthenticated) => {
    const pathName = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    const isAuthenticatedPage = authenticatedPages.includes(pathName);

    if (isUnauthenticatedPage && isAuthenticated) {
        history.replace('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.replace('/');
    }
};

export const routes = (
    <Router history={history}>
        <div>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => onEnterPublicPage(Login)}/>
                <Route
                    path="/signup"
                    render={() => onEnterPublicPage(Signup)}/>
                <Route
                    path="/links"
                    render={() => onEnterPrivatePage(Link)}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </Router>
);
