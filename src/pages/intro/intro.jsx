import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import Needle from './needle.svg';
import Logo from './nwl-logo.svg';
import Explody from '../../components/explody';
import './intro.css';

export default class Intro extends Component {
   render() {
    return (
      <Wrapper>
        <Helmet title="Intro" />
        <div className="compass">
          <img className="needle" src={Needle} alt="needle" />
        </div>
        <Explody>
          NW Lights is a product design & management consultancy lead
          by <Link to="andres">Andres</Link> de Lucca and <Link to="joshua">Joshua</Link> Richey. With years of experience in <Link to="./design">human centered
          design</Link> practices and agile <Link to="agile">product
          development</Link>, our <Link to="expertise">expertise</Link> enables us to
          analyze your team's efficacy, gauge your impact, and help you tune
          your processes. Put simply, if you're working on a web app, we can either build it for you, or help you get it done. <Link to="contact">Get
          in touch</Link> if you'd like to talk.
        </Explody>
        <img className="nwl-logo" src={Logo} alt="NW Lights logo" />
      </Wrapper>
    );
  }
}
