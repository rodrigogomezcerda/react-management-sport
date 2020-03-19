import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { League, Calendar } from './components';
import { ViewNotFound } from './views';
const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={League} />
      <Route exact path='/league' component={League} />
      <Route exact path='/calendar' component={Calendar} />
      <Route component={ViewNotFound} />
    </Switch>
  );
};

export default Router;
