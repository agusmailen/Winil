import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import PrivateRoute from '../containers/PrivateRoute';
import Register from '../containers/Register';
import Profile from '../containers/Profile';

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <PrivateRoute exact path='/user/profile' component={Profile} />
      </Switch>
  </BrowserRouter>
);
export default App;