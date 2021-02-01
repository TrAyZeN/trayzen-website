import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import About from '../../pages/About';

const App: React.VFC = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
