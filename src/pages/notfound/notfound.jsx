import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import './notfound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet title="Lost" />
        <div>
          <h1>
            Not Found
          </h1>
        </div>
      </div>
    );
  }
}
