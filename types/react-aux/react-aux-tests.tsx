import * as React from 'react';
import Aux from 'react-aux';

class Example extends React.Component {
  render() {
    return (
      <Aux>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Aux>
    );
  }
}
