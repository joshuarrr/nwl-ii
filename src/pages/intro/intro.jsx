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
        <Explody>{
          (explodeAll) =>
            <div>
              NW Lights is a product design & management consultancy lead by <Link to="andres" onMouseEnter={explodeAll}>Andres</Link> de Lucca and <Link to="joshua" onMouseEnter={explodeAll}>Joshua</Link> Richey. With years of experience in agile <Link to="product" onMouseEnter={explodeAll}>product </Link> development and human centered <Link to="./design" onMouseEnter={explodeAll}>design</Link>, our <Link to="expertise" onMouseEnter={explodeAll}>expertise</Link> enables us to validate your direction. Put simply, if you're working on a web app, we can either build it for you, or help you get it done. <Link to="contact" onMouseEnter={explodeAll}>Get in touch</Link> if you'd like to talk.
            </div>
          }
        </Explody>
      </Wrapper>
    );
  }
}
