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
        <Link onClick={() => this.closeMenu()} to="features" smooth={true}>Features</Link>
        <Link onClick={() => this.closeMenu()} to="roadmap" smooth={true}>Roadmap</Link>
        <Link onClick={() => this.closeMenu()} to="wallets" smooth={true}>Wallets</Link>
        <Link onClick={() => this.closeMenu()} to="mining" smooth={true}>Mining</Link>
      </Menu>
    )
  }
}

export default Nav;
