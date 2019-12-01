import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import AuthService from '../services/AuthService';

import Main from '../pages/Main';
import Profile from '../pages/Profile';
import NotFound from '../pages/Error/NotFound';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

const PrivateRoute = (props) => (
  AuthService.isAuthenticated()
    ? <Route {...props}/>
    : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Main}/>
      <Route path={'/login'} component={Login}/>
      <Route path={'/registration'} component={Registration}/>

      <PrivateRoute path={'/profile'} component={Profile}/>

      <Route path="*" component={NotFound}/>

    </Switch>
  </BrowserRouter>
);

export default Routes;
