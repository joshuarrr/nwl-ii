import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper/wrapper';
import { browserHistory} from 'react-router';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Routes from './routes';


ReactDOM.render(
  <Router history={browserHistory}>
    <Wrapper>
      <Routes/>
    </Wrapper>
  </Router>,
 document.getElementById('root')
);
