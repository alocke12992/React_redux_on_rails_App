import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './comps/Home';
import Apps from './comps/Apps';
import AppView from './comps/AppView';
import NoMatch from './comps/NoMatch';
import FetchApps from './comps/FetchApps';
import image from './background.jpg';

const styles = {
  width: '100%',
  height: '1200px',
  background: 'url(' + image + ')',
  backgroundSize: 'cover',
};

const App = () => (
  <section style={ styles }>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/apps" component={ FetchApps } />
      <Route component={ NoMatch } />
    </Switch>
  </section>
);

export default App;
