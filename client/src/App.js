import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './comps/Home';
import Apps from './comps/Apps';
import AppView from './comps/AppView';
import NoMatch from './comps/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/apps" component={Apps} />
    <Route exact path="/apps/:id" component={AppView} />
    <Route component={NoMatch} />
  </Switch>
);
export default App;
