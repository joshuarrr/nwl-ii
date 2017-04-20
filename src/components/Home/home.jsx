import React, { Component } from 'react';
import classnames from 'classnames';
import './home.css';

export default class Home extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Contact', className)} {...props}>
        <h1>
          Home
        </h1>
      </div>
    );
  }
}