import React, { RefObject, createRef } from 'react';
import { createBrowserRouter, useOutlet, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import './style.scss';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import About from '../../pages/About';

const routes = [
  { path: '/', Component: Home, nodeRef: createRef() },
  { path: '/projects', Component: Projects, nodeRef: createRef() },
  { path: '/about', Component: About, nodeRef: createRef() },
];

const App: React.VFC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="app">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef as RefObject<HTMLDivElement>}
          in
          appear
          // Seems to be timeout before starting enter transition
          timeout={500}
          unmountOnExit
          classNames="page"
        >
          {() => (
            <div ref={nodeRef as RefObject<HTMLDivElement>} className="page">
              <div className="layer" />
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default App;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: <route.Component />,
    })),
  },
]);
