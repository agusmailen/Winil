import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import PrivateRoute from '../containers/PrivateRoute';
import Register from '../containers/Register';
//import Profile from '../containers/Profile';
import Player from '../containers/Player';
import Cart from '../containers/Cart';

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/track/:playerId' component={Player} />
          <Route exact path='/Cart' component={Cart} />
          <PrivateRoute exact path='/' component={Home} />
      </Switch>
  </BrowserRouter>
);

export default App;