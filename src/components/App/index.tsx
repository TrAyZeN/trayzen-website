import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.scss';

import Loader from '../Loader';

const Home = lazy(() => import('../../pages/Home'));
const Projects = lazy(() => import('../../pages/Projects'));
const About = lazy(() => import('../../pages/About'));

const App: React.VFC = () => (
  <div className="app">
    <BrowserRouter>
      <Suspense fallback={Loader}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

export default App;
