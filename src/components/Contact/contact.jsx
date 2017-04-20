import React, { Component } from 'react';
import classnames from 'classnames';

import './contact.css';

export default class Contact extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Contact', className)} {...props}>
        <h1>
          Contact
        </h1>
      </div>
    );
  }
}