import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from './components/header/header';
import Intro from './pages/intro/intro';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import NotFound from './pages/notfound/notfound';

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
    <Route render={({ location }) => (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Switch key={location.key} location={location}>
          <RouteWithWrapper exact path="/" component={Home} />
          <Route exact path="/intro" component={Intro} />
          <RouteWithWrapper exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <RouteWithWrapper path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </CSSTransitionGroup>
      )}/>
  </Router>
);

export default Routes;
