import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ViewNotFound, ViewCalendar, ViewLeague } from './views';

const Router = () => (
  <Switch>
    <Route exact path="/" component={ViewLeague} />
    <Route exact path="/league" component={ViewLeague} />
    <Route exact path="/calendar/:team/:name" component={ViewCalendar} />
    <Route component={ViewNotFound} />
  </Switch>
);

export default Router;
