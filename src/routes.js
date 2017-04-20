import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import NotFound from './components/NotFound/notfound';

const RouteWithWrapper = ({ component, ...rest }) => {
  return (
    <div>
      <Header />
      <Route {...rest} render={ () => React.createElement(component) } />
      {/*<Footer />*/}
    </div>
  );
};

const Routes = (props) => (
  <Router {...props}>
      <Switch>
        <RouteWithWrapper exact path="/" component={Home} />
        <RouteWithWrapper exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <RouteWithWrapper path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
  </Router>
);

export default Routes;
