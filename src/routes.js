import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

// Routes
import Intro from './pages/intro/intro';
import Andres from './pages/andres/andres';
import Joshua from './pages/joshua/joshua';
import Product from './pages/product/product';
import Design from './pages/design/design';
import Expertise from './pages/expertise/expertise';
import Contact from './pages/contact/contact';
import NotFound from './pages/notfound/notfound';

const Routes = (props) => (
  <Route render={({ location }) => (
      <Switch key={location.key} location={location}>
        <Route exact path="/" component={Intro} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/andres" component={Andres} />
        <Route exact path="/joshua" component={Joshua} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/expertise" component={Expertise} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    )}/>
);

export default Routes;
