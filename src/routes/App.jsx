import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />
      </Switch>
  </BrowserRouter>
);
export default App;