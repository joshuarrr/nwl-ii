import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
// import './andres.css';

export default class Andres extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Andres de Lucca" />
        <h1>
          Andres is a guy,
        </h1>
      </Wrapper>
    );
  }
}