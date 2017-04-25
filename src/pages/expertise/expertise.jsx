import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
// import './expertise.css';

export default class Expertise extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Expertise" />
        <h1>
          Expertise
        </h1>
      </Wrapper>
    );
  }
}