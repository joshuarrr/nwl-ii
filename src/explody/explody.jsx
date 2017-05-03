import React from 'react';
import ReactDOM from 'react-dom';
import './explody.css';

export default class Explody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      exploded: true,
      initialized: false,
      elements: [],
      navOffsets: []
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.navigated && !nextProps.navigated) {
      this.setState({navigated: false, navigating: false}, () => this.implodeAll());
    } else if (!this.props.navigated && nextProps.navigated) {
      this.setState({navigated: false, navigating: false}, () => {
        this.explodeAllAndNavigate();
      });
    }
  }

  componentWillMount = () => {
    React.Children.forEach(
      typeof this.props.children === 'function'
      ? this.props.children(this.explodeAll).props.children
      : this.props.children, (child) => {
        if (typeof child === "string") {
          // regular text child
          child.split("").forEach(c => {
            this.state.elements.push(this.randomState(1));
          })
        }
      });
    setTimeout(() => this.implodeAll(), 100);
  }

  componentDidMount = () => {
    const explodeme = document.querySelector('.explodeme');
    // console.log('* explodeme = ' + explodeme + '\n');
    setTimeout(() => this.setState({initialized: true}), 500);
    // console.log( 'initialized = ' + el.querySelector('h2') );
  }

  componentDidUpdate = () => {
    if (this.state.navigating) {
      const elementsCopy = this.state.elements.map((el, i) => {
        if (el.navigationElement) {
          const offset = this.navigationOffsetFor(i, el.navOffset);
          return this.navigationState(
            i,
            el.navOffset,
            offset.dx,
            offset.dy
          )
        } else {
          return el;
        }
      });
      this.setState({
        navigating: false,
        navigated: true,
        elements: elementsCopy
      });
    }
  }

  navigationOffsetFor = (index, navOffset) => {
    const links = ReactDOM.findDOMNode(this).querySelectorAll('a');
    const rect = links[navOffset].getBoundingClientRect();
    let offset = 0;
    for (let i = 0; i < navOffset; i++) {
      offset += links[i].getBoundingClientRect().width + 20;
    }
    const dx = offset - rect.left;
    const dy = -rect.top;
    return {
      dx, dy
    };
  }


  defaultState = () => ({
    exploded: false,
    hovering: false,
    navigationElement: false,
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

  randomTranslate = (factor = 1) => ({
    x: this.randRange(200, 800) * factor * this.randSign(),
    y: this.randRange(200, 800) * factor * this.randSign(),
    z: this.randRange(200, 800) * factor * this.randSign()
  })

  randomRotate = (normal, factor = 1) => ({
    nx: normal.x,
    ny: normal.y,
    nz: normal.z,
    // adjust # of rotations
    rho: this.randRange(-300, 2400) * factor
  })

  randomState = (factor = 1, hovering = false) => {
    const normal = this.randomNormal();
    return {
      exploded: true,
      hovering: hovering,
      navigationElement: false,
      translate: this.randomTranslate(factor),
      rotate: this.randomRotate(normal, factor),
      // adjust transparency
      opacity: this.randRange(0.3, 0.7)
    }
  }

  randRange(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
  }

  randSign() {
    return Math.random() > 0.5 ? 1 : -1;
  }

  // Translate & Opacity Style
  styleFor = (index) => {
    const element = this.state.elements[index];
    if (element === undefined) {
      return {};
    }
    if (element.navigationElement) {
      return this.navigationStyleFor(element);
    }
    const {translate: {x, y, z}, opacity} = element;
    // console.log(index, `translate3d(${x}px, ${y}px, ${z}px)`);
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px`,
      opacity: opacity
    };
  }

  navigationStyleFor = (element) => {
    return {
      transform: `translate3d(${element.dx}px, ${element.dy}px, 0)`
    };
  }

  // Rotate Style
  innerStyleFor = (index) => {
    const element = this.state.elements[index];
    if (element === undefined || element.navigationElement) {
      return {};
    }
    const {rotate: {nx, ny, nz, rho}} = element;
    // console.log(index, `rotate3d(${nx}, ${ny}, ${nz}, ${rho}deg)`);
    return {
      transform: `rotate3d(${nx}, ${ny}, ${nz}, ${rho}deg)`
    };
  }

  explodeAll = () => {
    if (this.state.navigated || this.state.navigating) {
      return;
    }
    // generate a new exploded state for each element
    const elementsCopy = this.state.elements.map((el, i) => {
      return this.state.navOffsets.indexOf(i) >= 0
        ? el
        : this.randomState()
    });
    this.setState({
      elements: elementsCopy,
      // Adds a class if exploding (in render())
      exploded: true
    });
  }

  implodeAll = () => {
    if (this.state.navigated || this.state.navigating) {
      return;
    }
    // generate the default state for each element
    const elementsCopy = this.state.elements.map(() => this.defaultState());
    this.setState({
      elements: elementsCopy,
      // Adds a class if imploding (in render())
      exploded: false
    });
  }

  navigationState = (offset, navOffset, dx, dy) => {
    return {
      navigationElement: true,
      navOffset,
      dx,
      dy
    }
  }

  navigate = () => {
    if (this.state.navigated || this.state.navigating) {
      return;
    }
    // generate a new exploded state for each element
    const elementsCopy = this.state.elements.map((el, i) => {
      const index = this.state.navOffsets.indexOf(i);
      return index < 0
        ? el
        : this.navigationState(i, index)
    });
    this.setState({
      elements: elementsCopy,
      // Adds a class if exploding (in render())
      exploded: true,
      navigating: true
    });
  }

  explodeAllAndNavigate = () => {
    const elementsCopy = this.state.elements.map((el, i) => {
      const index = this.state.navOffsets.indexOf(i);
      return index < 0
        ? this.randomState()
        : this.navigationState(i, index)
    });
    this.setState({
      elements: elementsCopy,
      // Adds a class if exploding (in render())
      exploded: true,
      navigating: true
    });
  }

  render = () => {
    const children = [];
    this.state.navOffsets.length = 0;
    let childOffset = 0;
      React.Children.forEach(
        typeof this.props.children === 'function'
          ? this.props.children(this.explodeAll, this.implodeAll, this.navigate).props.children
          : this.props.children, (child) => {
        let lastWordWhiteSpace = false;
      if (child[0] === " ") {
        children.push(" ");
      }
      if (typeof child === "string") {
        // regular text child
        child.split(/\s+/).map(c => {
          if (c === "") {
            return;
          }
          // wrap each word in a set of spans
          const span = <span key={childOffset} className='word-wrapper' style={this.styleFor(childOffset)}>
              <span className='word-wrapper--inner'style={this.innerStyleFor(childOffset)}>
                {c}
              </span>
            </span>;
          children.push(span);
          if (!lastWordWhiteSpace) {
            children.push(" ");
          }
          childOffset++;
          lastWordWhiteSpace = /\s/.test(c);
        });
      } else if (typeof child.type === "string") {
        // React.dom component (<a> <div> etc)
        children.push(child);
      } else {
        // custom React Component
        const span = <span key={childOffset} className='nav word-wrapper' style={this.styleFor(childOffset)}>
            <span className='word-wrapper--inner'style={this.innerStyleFor(childOffset)}>
              {child}
            </span>
          </span>;
        children.push(span);
        if (!lastWordWhiteSpace) {
          children.push(" ");
        }
        this.state.navOffsets.push(childOffset);
        childOffset++;
        lastWordWhiteSpace = true;
      }
    });
    const classList = [
      'explodeme',
      this.state.exploded ? 'exploding' : 'imploding',
      this.state.initialized ? 'initialized' : 'uninitialized'
    ];
    return <h2
      className={classList.join(' ')}
      style={{maxHeight: this.state.navigated ? 0 : 1000}}
      >{children}</h2>;
  }
}
