import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className="header" {...props}>
        <h2>HEADER</h2>
      </div>
    );
  }
}