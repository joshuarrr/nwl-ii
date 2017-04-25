import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
// import './joshua.css';

export default class Joshua extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Joshua Richey" />
        <h1>
          Joshua is a guy,
        </h1>
      </Wrapper>
    );
  }
}