import React from 'react';

import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/landingpage';
import LogIn from '../pages/login';
import WhoWeAre from '../pages/whoWeAre';
import ForYou from '../pages/forYou';
import ForYourCompany from '../pages/forYourCompany';
import Benefits from '../pages/benefits';
import Team from '../pages/team';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact />
    <Route path="/login" component={LogIn} />
    <Route path="/who-are" component={WhoWeAre} exact />
    <Route path="/for-you" component={ForYou} exact />
    <Route path="/for-your-company" component={ForYourCompany} exact />
    <Route path="/team" component={Team} exact />
    <Route path="/benefits" component={ Benefits } exact />
  </Switch>
);

export default Routes;