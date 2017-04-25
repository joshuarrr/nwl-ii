import React, { Component } from 'react';
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
      </Wrapper>
    );
  }
}