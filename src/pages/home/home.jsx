import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';

import './home.css';

export default class Home extends Component {

  render() {
    return (
      <Wrapper>
        <Helmet title="Home" />
        <h1>
          Home
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    );
  }
}