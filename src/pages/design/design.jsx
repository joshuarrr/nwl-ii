import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import '../../styles/shared.css';

export default class Design extends Component {
  render() {
    return (
      <div>
        <Helmet title="Design" />
        {/*<h1>Design is hard</h1>*/}
        <h2>
          We believe in releasing products that improve and enrich people's lives. To do that, we use modern user research and experience methodologies to ascertain our users needs and ensure that our designs are serving the purpose we expect them to and resonating with our users.
        </h2>
        <h2>A few staples from our design toolbox include:</h2>
        <div className="breakdown">
          <h3>User Research</h3>
            <ul className="nicer-bulleted-list">
              <li>contextual inquiry</li>
              <li>competitor analysis</li>
              <li>persona development</li>
            </ul>
          <h3>Content Strategy</h3>
            <ul className="nicer-bulleted-list">
              <li>user journeys</li>
              <li>information architecture</li>
              <li>context mapping</li>
            </ul>
          <h3>Ideation</h3>
            <ul className="nicer-bulleted-list">
              <li>concept sketches</li>
              <li>wireframes</li>
              <li>clickable prototypes</li>
            </ul>
          <h3>Validation</h3>
            <ul className="nicer-bulleted-list">
              <li>usability testing</li>
              <li>A+B Testing</li>
              <li>Analytics</li>
            </ul>
        </div>
      </div>
    );
  }
}
