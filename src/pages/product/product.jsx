import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
// import './product.css';

export default class Product extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Product Management" />
        <h1>
          Product Management
        </h1>
      </Wrapper>
    );
  }
}