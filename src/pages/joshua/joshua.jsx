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
          Joshua Richey
        </h1>
        <h2>
          Design Director
        </h2>
        <p>
          A human centered interactive experience designer focused on crafting products that empower, delight, and improve lives, Joshua is compelled by the challenge of creating simple solutions to complex problems.
        </p>
      </Wrapper>
    );
  }
}