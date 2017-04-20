import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from './components/App/app';
import About from './components/About/about';
import NotFound from './components/NotFound/notfound';

// const Routes = (props) => (
//   <Router>
//     <Switch>
//       <Route path="/" exact component={App} />
//       <Route path="/about" component={About} />
//       <Route component={NotFound} />
//     </Switch>
//   </Router>
// );

const routes = [
  { path: '/',
    component: App
  },
  { path: '/about',
    component: About
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const Routes = () => (
  <Router>
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default Routes;

