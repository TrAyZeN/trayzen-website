import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './style.scss';

import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import About from '../../pages/About';

const routes = [
  { path: '/', Component: Home },
  { path: '/projects', Component: Projects },
  { path: '/about', Component: About },
];

const App: React.VFC = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <div className="page-container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  appear
                  // Seems to be timeout before starting enter transition
                  timeout={600}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <div className="layer" />

                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
