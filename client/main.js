import './main.html';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Link from '../imports/ui/Link'
import Signup from "../imports/ui/Signup";
import Login from "../imports/ui/Login";
import NotFound from "../imports/ui/NotFound";
import { Router, Route, Switch } from 'react-router';
import history from '../imports/ui/History';
import { Tracker } from 'meteor/tracker';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = (component) => {
    if (Meteor.userId()) {
        history.push('/links');
    } else {
        return component;
    }
};

const onEnterPrivatePage = (component) => {
    if (Meteor.userId()) {
        history.push('/');
    } else {
        return component;
    }
};

const routes = (
  <Router history={history}>
    <div>
        <Switch>
            <Route path="/signup" render={onEnterPublicPage(<Signup/>)}/>
            <Route path="/links" render={onEnterPublicPage(<Link/>)}/>
            <Route path="/" render={onEnterPrivatePage(<Login/>)} exact={true}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </div>
  </Router>
);

Tracker.autorun(() => {
   const isAuthenticated = !!Meteor.userId();
   const pathName = history.location.pathname;
   const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
   const isAuthenticatedPage = authenticatedPages.includes(pathName);

   if (isUnauthenticatedPage && isAuthenticated) {
       history.push('/links');
   } else if (isAuthenticatedPage && !isAuthenticated) {
       history.push('/');
   }
});
Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
