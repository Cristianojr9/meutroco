import React from 'react';

import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/landingpage';
import LogIn from '../pages/login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" component={LogIn} />
  </Switch>
);

export default Routes;
