import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

  randRange(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
  }

  randSign() {
    return Math.random() > 0.5 ? 1 : -1;
  }

  rotateStyle(factor = 1) {
    const rx = this.randRange(0, 1);
    const ry = this.randRange(0, 1);
    const rz = this.randRange(0, 1);
    const theta = this.randRange(300, 700) * this.randSign() * factor;
    console.log(factor, theta);
    return `rotate3d(${rx}, ${ry}, ${rz}, ${theta}deg)`;
  }

  rotatify(el, translateStyle, factor = 1) {
    el.style.transform = translateStyle + " " + this.rotateStyle(factor);
  }

  componentDidMount = () => {
    return;
    const el = ReactDOM.findDOMNode(this);
    // find all the immediate children of the h2, ignoring the links
    const spans = el.querySelectorAll('h2 > span');
    // keep track of all the timeouts and intervals so they can be cancelled
    // on mouseleave
    const timeouts = [];
    const intervals = [];

    // set up the initial (far offscreen) rotations and translations
    for (let i = 0; i < spans.length; i++) {
      const x = this.randRange(1200, 2400) * this.randSign();
      const y = this.randRange(1200, 2400) * this.randSign();
      const z = this.randRange(1200, 2400) * this.randSign();
      const translateStyle = `translate3d(${x}px, ${y}px, ${z}px)`;
      this.rotatify(spans[i], translateStyle);
      spans[i].style.opacity = this.randRange(0.3, 0.6);
    }

    // go async so that the elements can mount with the proper style, then
    // have it removed and float back into place
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.transform = "";
        spans[i].style.opacity = 1;
      }
      // mark the h2 as initialized, so we get the slightly-slower animation
      setTimeout(() => el.querySelector('h2').classList.add('initialized'), 500);
    }, 20);

    // set up the hover event
    el.addEventListener('mouseenter', () => {
      for (let i = 0; i < spans.length; i++) {
        // pick random translations in 3-space
        const x = this.randRange(200, 400) * this.randSign();
        const y = this.randRange(200, 400) * this.randSign();
        const z = this.randRange(200, 400) * this.randSign();
        const translateStyle = `translate3d(${x}px, ${y}px, ${z}px)`;

        // pick a random rotation in 3-space and apply the style (and set opacity)
        this.rotatify(spans[i], translateStyle);
        spans[i].style.opacity = this.randRange(0.3, 0.6);

        // the animation lasts 3 seconds, so after that, pick a new hover rotation
        timeouts.push(setTimeout(() => {
          this.rotatify(spans[i], translateStyle, 50);
          // every 9 seconds, pick a new target rotation
          intervals.push(setInterval(() => {
            this.rotatify(spans[i], translateStyle, 50);
          }, 3000));
        }, 3000));
      }
    });

    // mouse leave, clear any timeouts and intervals, and reset transform and opacity
    el.addEventListener('mouseleave', () => {
      timeouts.forEach(t => clearTimeout(t));
      intervals.forEach(t => clearInterval(t));
      timeouts.length = 0;
      intervals.length = 0;
      for (let i = 0; i < spans.length; i++) {
        spans[i].style.transform = "";
        spans[i].style.opacity = 1;
      }
    });

  }

  render() {
    const str = `NW Lights is a product design & management consultancy lead by <a href="andres">Andres de Lucca</a> and <a href="joshua">Joshua Richey</a>. With years of experience in <a href="./design">human centered design</a> practices and agile <a href="agile">product development</a>, our <a href="expertise">expertise</a> enables us to analyze your team's efficacy, gauge your impact, and help you tune your processes to make your lean product development hum. <a href="contact">Get in touch</a> if you'd like to talk.`
    const introcopy = this.spanWrapper(str);

    return (
      <Wrapper>
        <Helmet title="Intro" />
          <div className="compass">
            <img className="needle" src={Needle} alt="needle" />
          </div>

        {/* <h2 dangerouslySetInnerHTML={{__html: introcopy}} /> */}
        <Explody>
          NW Lights is a product design & management consultancy lead by <a href="andres">Andres de Lucca</a>
           and <a href="joshua">Joshua Richey</a>. With years of experience in <a href="./design">human centered design</a>
           practices and agile <a href="agile">product development</a>, our
           <a href="expertise">expertise</a> enables us to analyze your team's efficacy,
           gauge your impact, and help you tune your processes to make your lean product
           development hum. <a href="contact">Get in touch</a> if you'd like to talk.
        </Explody>
        <img className="nwl-logo" src={Logo} alt="NW Lights logo" />
      </Wrapper>
    );
  }
}

class Explody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {elements: []};
  }

  componentWillMount = () => {
    React.Children.forEach(this.props.children, (child) => {
      if (typeof child === "string") {
        // regular text child
        child.split("").forEach(c => {
          this.state.elements.push(this.defaultState());
        })
      }
    });
  }

  render = () => {
    const children = [];
    let childOffset = 0;
    React.Children.forEach(this.props.children, (child) => {
      if (typeof child === "string") {
        // regular text child
        child.split(" ").map(c => {
          console.log(child, "binding with", childOffset);
          const onMouseEnter = this.explode.bind(null, childOffset);
          const onMouseLeave = this.implode.bind(null, childOffset);
          const span = <span
            key={childOffset}
            style={this.styleFor(childOffset)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>{c}</span>;
          children.push(span);
          children.push(<span>{" "}</span>);
          childOffset++;
        });;
      } else if (typeof child.type === "string") {
        // React.dom component (<a> <div> etc)
        children.push(child);
      } else {
        // custom React Component
        children.push(child);
      }
    });
    return <h2>{children}</h2>;
  }

  defaultState = () => ({
    translate: {
      x: 0,
      y: 0,
      z: 0
    },
    rotate: {
      nx: 0,
      ny: 0,
      nz: 0,
      rho: 0
    },
    opacity: 1
  })

  randomNormal = () => {
    const x = this.randRange(),
          y = this.randRange(),
          z = this.randRange();
    const mag = Math.sqrt(x * x + y * y + z * z);
    return {
      x: x / mag,
      y: y / mag,
      z: z/ mag
    };
  }

  randomState = (factor = 1) => {
    const normal = this.randomNormal();
    return {
      translate: {
        x: this.randRange(200, 400) * this.randSign(),
        y: this.randRange(200, 400) * this.randSign(),
        z: this.randRange(200, 400) * this.randSign()
      },
      rotate: {
        nx: normal.x,
        ny: normal.y,
        nz: normal.z,
        rho: this.randRange(300, 900)
      },
      opacity: this.randRange(0.3, 0.7)
    }
  }

  randRange(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
  }

  randSign() {
    return Math.random() > 0.5 ? 1 : -1;
  }

  styleFor = (index) => {
    const element = this.state.elements[index];
    console.log("style for", index, element);
    if (element === undefined) {
      return {};
    }
    const {translate: {x, y, z}, rotate: {nx, ny, nz, rho}, opacity} = element;
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) rotate3d(${nx}, ${ny}, ${nz}, ${rho}deg)`,
      opacity: opacity
    };
  }

  explode = (index) => {
    const elementsCopy = this.state.elements.slice();
    elementsCopy[index] = this.randomState();
    console.log('explode', index, elementsCopy[index]);
    this.setState({elements: elementsCopy});
  }

  implode = (index) => {
    const elementsCopy = this.state.elements.slice();
    elementsCopy[index] = this.defaultState();
    console.log('implode', index, elementsCopy[index]);
    this.setState({elements: elementsCopy});
  }
}
