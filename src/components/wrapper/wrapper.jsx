import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Needle from './needle.svg';
import Logo from './nwl-logo.svg';
import './wrapper.css';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Helmet titleTemplate="%s | NWL" id="pop" />
        <div className="compass">
          <img className="needle" src={Needle} alt="needle" />
        </div>
        {/*<Nav />*/}
        { this.props.children }
        <img className="nwl-logo" src={Logo} alt="NW Lights logo" />
      </div>
    );
  }
}
