import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

export default class Header extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="header" {...props}>
        <img src={logo} className="logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}