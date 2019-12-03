import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import AuthService from '../services/AuthService';

import Main from '../pages/Main';
import Profile from '../pages/Profile';
import NotFound from '../pages/Error/NotFound';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import AutorList from '../pages/Autor';
import AutorForm from '../pages/Autor/form';
import PublisherForm from '../pages/Publisher/form';
import PublisherList from '../pages/Publisher';
import GenreList from '../pages/Genre';
import GenreForm from '../pages/Genre/form';
import BookForm from '../pages/Book/form';
import BookList from '../pages/Book';

const PrivateRoute = (props) => (
  AuthService.isAuthenticated()
    ? <Route {...props}/>
    : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={'/home'} component={Main}/>
      <Route exact path={'/'} component={Login}/>
      <Route path={'/registration'} component={Registration}/>
      <Route path={'/autor/:id'} component={AutorForm}/>
      <Route path={'/autor'} component={AutorList}/>
      <Route path={'/publisher/:id'} component={PublisherForm}/>
      <Route path={'/publisher'} component={PublisherList}/>
      <Route path={'/genre/:id'} component={GenreForm}/>
      <Route path={'/genre'} component={GenreList}/>
      <Route path={'/book/:id'} component={BookForm}/>
      <Route path={'/book'} component={BookList}/>






      <PrivateRoute path={'/profile'} component={Profile}/>

      <Route path="*" component={NotFound}/>

    </Switch>
  </BrowserRouter>
);

export default Routes;
