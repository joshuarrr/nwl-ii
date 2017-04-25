import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import Explody from '../../components/explody';
import './intro.css';

export default class Intro extends Component {
   render() {
    return (
      <Wrapper>
        <Helmet title="Intro" />
        <Explody>
          NW Lights is a product design & management consultancy lead
          by <Link to="andres">Andres</Link> de Lucca and <Link to="joshua">Joshua</Link> Richey. With years of experience in agile <Link to="product">product
          </Link> development and human centered <Link to="./design">design</Link>, our <Link to="expertise">expertise</Link> enables us to
          validate your direction. Put simply, if you're working on a web app, we can either build it for you, or help you get it done. <Link to="contact">Get
          in touch</Link> if you'd like to talk.
        </Explody>
      </Wrapper>
    );
  }
}
