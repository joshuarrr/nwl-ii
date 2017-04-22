import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import './contact.css';

export default class Contact extends Component {

  render() {
    return (
      <Wrapper>
        <Helmet title="Contact" />
          <h1>
            Contact
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
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