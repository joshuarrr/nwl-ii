import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Wrapper from '../../components/wrapper/wrapper';
import Needle from './needle.svg';
import Logo from './nwl-logo.svg';
import './intro.css';

export default class Intro extends Component {
  spanWrapper = (s) => {
      var parser = new DOMParser(),
          serializer = new XMLSerializer();

      var htmlDoc = parser.parseFromString(s, 'text/html');

      this.wrapNodes(htmlDoc);
      this.wrapWords(htmlDoc);

      return serializer.serializeToString(htmlDoc);
  }
  wrapNodes = (parentNode) => {
      var nodes = this.getNodes(parentNode, 3),
          i;

      for (i = 0; i < nodes.length; i++) {
          this.wrapNode(nodes[i]);
      }
  }

  wrapNode = (node) => {
      var span = this.createSpan();

      if (node.data.match(/^\s+$/)) {
          return;
      }

      this.insertBefore(node, span);

      span.appendChild(node);
  }

  wrapWords = (parentNode) => {
      var nodes = this.getNodes(parentNode, 'span'),
          i;

      for (i = 0; i < nodes.length; i++) {
          this.wrapWord(nodes[i]);
      }
  }

  wrapWord = (node) => {
      var words = node.textContent.split(' '),
          space,
          span,
          text,
          i;

      for (i = 0; i < words.length; i++) {
          text = words[i];

          space = document.createTextNode(' ');

          if (text) {
              span = this.createSpan();
              span.textContent = text;

              this.insertBefore(node, span);

              if (i > 0) {
                  this.insertBefore(span, space);
              }
          } else {
              if (i > 0) {
                  this.insertBefore(node, space);
              }
          }
      }
    this.removeElement(node);
  }
  getNodes = (parentNode, nodeName, _nodes) => {
    var childNodes = parentNode.childNodes,
        nodes = _nodes || [],
        node,
        i;

    for (i = 0; i < childNodes.length; i++) {
        node = childNodes.item(i);

        if (node.nodeName.toLowerCase() === nodeName || node.nodeType === nodeName) {
            nodes.push(node);
        }

        nodes = this.getNodes(node, nodeName, nodes);
    }

    return nodes;
  }

  insertBefore = (referenceNode, newNode) => {
    return referenceNode.parentNode.insertBefore(newNode, referenceNode);
  }

  insertAfter = (referenceNode, newNode) => {
    return this.insertBefore(referenceNode.nextSibling, newNode);
  }

  removeElement = (node) => {
      node.parentNode.removeChild(node);
  }

  createSpan = () => {
      var element = document.createElement('span');
          // element.setAttribute('class', 'foo');

      return element;
  }

  render() {
    const str = `NW Lights is a product design & management consultancy lead by <a href="andres">Andres de Lucca</a> and <a href="joshua">Joshua Richey</a>. With years of experience in <a href="design">human centered design</a> practices and <a href="agile">agile product development</a>, our <a href="expertise">expertise</a> enables us to analyze your team's efficacy, gauge your impact, and help you tune your processes to make your lean product development hum. <a href="contact">Get in touch</a> if you'd like to talk.`
    const introcopy = this.spanWrapper(str);

    return (
      <Wrapper>
        <Helmet title="Intro" />
          <div className="compass">
            <img className="needle" src={Needle} alt="needle" />
          </div>
{/*        <h1>
          Validate your direction.
        </h1>*/}

        <h2 dangerouslySetInnerHTML={{__html: introcopy}} />
        <img className="nwl-logo" src={Logo} alt="NW Lights logo" />
      </Wrapper>
    );
  }
}