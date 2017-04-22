import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import Needle from './needle.svg';
import Logo from './nwl-logo.svg';
import './intro.css';

export default class Intro extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Intro" />
          <div className="compass">
            <img className="needle" src={Needle} alt="needle" />
          </div>
{/*        <h1>
          Validate your direction.
        </h1>*/}
        <h2>
          NW Lights is a product design & management consultancy lead by <a href="#">Andres de Lucca</a> and <a href="#">Joshua Richey</a>. With years of experience in <a href="#">human centered design</a> practices and <a href="#">agile product development</a>, our <a href="##">expertise</a> enables us to analyze your team's efficacy, gauge your impact, and help you tune your processes to make your lean product development hum. <a href="#">Get in touch</a> if you'd like to talk.
        </h2>
        <img className="nwl-logo" src={Logo} alt="NW Lights logo" />
      </Wrapper>
    );
  }
}