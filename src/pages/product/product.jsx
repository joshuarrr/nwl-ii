import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
// import './product.css';

export default class Product extends Component {
  render() {
    return (
      <div>
        <Helmet title="Product Management" />
        <h1>
          Product Management
        </h1>
      </div>
    );
  }
}
