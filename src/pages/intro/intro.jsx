import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './intro.css';

export default class Intro extends Component {
   render() {
    return (
      <Helmet title="Intro" />
    );
  }
}
