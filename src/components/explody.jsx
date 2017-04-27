import React from 'react';
// import ReactDOM from 'react-dom';

export default class Explody extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {elements: []};
  }

  componentWillMount = () => {
    React.Children.forEach(
      typeof this.props.children === 'function'
      ? this.props.children(this.explodeAll).props.children
      : this.props.children, (child) => {
        if (typeof child === "string") {
          // regular text child
          child.split("").forEach(c => {
            this.state.elements.push(this.randomState(10));
          })
        }
      });
    setTimeout(() => this.implodeAll(), 100);
  }

  componentDidMount = () => {
    const explodeme = document.querySelector('.explodeme');
    // console.log('* explodeme = ' + explodeme + '\n');
    setTimeout(() => explodeme.classList.add('initialized'), 500);
    // console.log( 'initialized = ' + el.querySelector('h2') );
  }

  defaultState = () => ({
    exploded: false,
    hovering: false,
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
    rho: this.randRange(-300, 400) * factor
  })

  randomState = (factor = 1, hovering = false) => {
    const normal = this.randomNormal();
    return {
      exploded: true,
      hovering: hovering,
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
    const {translate: {x, y, z}, opacity} = element;
    // console.log(index, `translate3d(${x}px, ${y}px, ${z}px)`);
    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px`,
      opacity: opacity
    };
  }

  // Rotate Style
  innerStyleFor = (index) => {
    const element = this.state.elements[index];
    if (element === undefined) {
      return {};
    }
    const {rotate: {nx, ny, nz, rho}} = element;
    // console.log(index, `rotate3d(${nx}, ${ny}, ${nz}, ${rho}deg)`);
    return {
      transform: `rotate3d(${nx}, ${ny}, ${nz}, ${rho}deg)`
    };
  }

  explodeAll = () => {
    // Add a class if exploding
    const explodeme = document.querySelector('.explodeme');
    explodeme.classList.add('exploding');
    explodeme.classList.remove('imploding');
    // console.log('explodAll');
    const elementsCopy = this.state.elements.map(() => this.randomState());
    // console.log('* elementsCopy = ' + elementsCopy + '\n');
    // console.log('* this.state.elements = ' + this.state.elements + '\n');
    this.setState({elements: elementsCopy});
  }

  implodeAll = () => {
    // Add a class if imploding
    const explodeme = document.querySelector('.explodeme');
    explodeme.classList.add('imploding');
    explodeme.classList.remove('exploding');
    // console.log('implodeAll');
    const elementsCopy = this.state.elements.map(() => this.defaultState());
    this.setState({elements: elementsCopy});
    // console.log('* elementsCopy = ' + elementsCopy + '\n');
  }

  render = () => {
    const children = [];
    let childOffset = 0;
      React.Children.forEach(
        typeof this.props.children === 'function'
          ? this.props.children(this.explodeAll, this.implodeAll).props.children
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
          const span = <span key={childOffset} className='word-wrapper init' style={this.styleFor(childOffset)}>
              <span style={this.innerStyleFor(childOffset)}>
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
        // console.log(child); // = NADA
      } else {
        // custom React Component
        children.push(child);
      }
    });
    return <h2 className='explodeme'>{children}</h2>;
  }
}