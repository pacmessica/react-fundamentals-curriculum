import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import Container from '../containers/Main'

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Container} />
  </Router>
);

module.exports = routes;
