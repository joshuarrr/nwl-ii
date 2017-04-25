import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
// import './design.css';

export default class Design extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Design" />
        <h1>
          Design is hard
        </h1>
      </Wrapper>
    );
  }
}