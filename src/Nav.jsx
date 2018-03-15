import React, { Component } from 'react';
import './Nav.css'
import { bubble as Menu } from 'react-burger-menu'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Nav extends Component {

  constructor() {
    super()
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
        width="240px"
      >
        <h2>Menu</h2>
        <Link onClick={() => this.closeMenu()} to="introduction" smooth={true}>Features</Link>
        <Link onClick={() => this.closeMenu()} to="downloads" smooth={true}>Downloads</Link>
        <Link onClick={() => this.closeMenu()} to="roadmap" smooth={true}>Roadmap</Link>
        <Link onClick={() => this.closeMenu()} to="links" smooth={true}>Links</Link>
      </Menu>
    )
  }
}

export default Nav;
