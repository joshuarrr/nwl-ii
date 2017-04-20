import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './app.css';

// Import routes
import Header from '../../components/Header/header';
import Home from '../../components/Home/home';
import About from '../../components/About/about';
import Contact from '../../components/Contact/contact';
import NotFound from '../../components/NotFound/notfound';

class App extends Component {

  render() {

    const RouteWithWrapper = ({ component, ...rest }) => {
      return (
        <div>
          <Header />
          <Route {...rest} render={ () => React.createElement(component) } />
          {/*<Footer />*/}
        </div>
      );
    };

    return (
      <Router>
        <div>
          <Switch>
            {<RouteWithWrapper exact path="/" component={Home} />}
            <Route exact path="/about" component={About} />
            <RouteWithWrapper path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;