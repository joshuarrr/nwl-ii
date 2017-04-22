import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './wrapper.css';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Helmet titleTemplate="%s | NWL" id="pop" />
        {/*<Nav />*/}
        { this.props.children }
      </div>
    );
  }
}