import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { League, Calendar } from './components';
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={League} />
        <Route exact path='/league' component={League} />
        <Route exact path='/calendar' component={Calendar} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
