import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Needle from './needle.svg';
import Logo from './nwl-logo.svg';
import Explody from '../../explody/explody';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './wrapper.css';

class Wrapper extends Component {
  render() {
    const navigated = !(this.props.location.pathname === '/' || this.props.location.pathname === '/intro');
    return (
      <div className="wrapper">
        <Helmet titleTemplate="%s | NWL" id="pop" />
        <div className="compass">
          <img className="needle" src={Needle} alt="needle" />
        </div>
        {/*<Nav />*/}
        <CSSTransitionGroup
          transitionName="content"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <Explody navigated={navigated}>{
            (explodeAll, implodeAll, navigate) =>
              <div>
                NW Lights is a product design & management consultancy lead by
                <Link to="andres" onMouseEnter={explodeAll} onMouseLeave={implodeAll} onClick={navigate}>Andres</Link> de Lucca and <Link to="joshua" onClick={navigate} onMouseEnter={explodeAll} onMouseLeave={implodeAll}>Joshua</Link> Richey. With years of experience in agile <Link to="product" onClick={navigate} onMouseEnter={explodeAll} onMouseLeave={implodeAll}>product</Link> development and human centered <Link to="./design" onClick={navigate} onMouseEnter={explodeAll} onMouseLeave={implodeAll}>design</Link>, our <Link onClick={navigate} to="expertise" onMouseEnter={explodeAll} onMouseLeave={implodeAll}>expertise</Link> enables us to validate your direction. Put simply, if you're working on a web app, we can either build it for you, or help you get it done. <Link onClick={navigate} to="contact" onMouseEnter={explodeAll} onMouseLeave={implodeAll}>Get in touch</Link> if you'd like to talk.
              </div>
            }
          </Explody>
        </CSSTransitionGroup>

        { this.props.children }
        <footer>
          <img className="nwl-logo" src={Logo} alt="NW Lights logo" />
        </footer>
      </div>
    );
  }
}

export default Wrapper = withRouter(Wrapper);
