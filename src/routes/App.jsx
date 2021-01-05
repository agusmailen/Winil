import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
      </Switch>
  </BrowserRouter>
);
export default App;