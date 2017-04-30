import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import './andres.css';

export default class Andres extends Component {
  render() {
    return (
      <Wrapper>
        <CSSTransitionGroup
          transitionName="content"
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <Helmet title="Andres de Lucca" />
          <h1>
            Andres de Lucca
          </h1>
          <h2>
            Product Director
          </h2>
          <p>
            A problem solver and bridge builder with a knack for num- bers and passion for great UX, Andres can empathize with Users, and distill key insights to define product mechanics and business models. He excels at building cross-functional teams and filtering out noise to focus on what’s important at the moment, while keeping an eye on the big picture.
          </p>
        </CSSTransitionGroup>
      </Wrapper>
    );
  }
}