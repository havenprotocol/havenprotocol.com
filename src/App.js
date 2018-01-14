import React, { Component } from 'react';
import './App.css';
import './Background.css'
import logo from './haven_logo.png'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Roadmap from './components/Roadmap'
import Wallet from './components/Wallet'
import Mining from './components/Mining'
require('particles.js')

class App extends Component {

  componentDidMount() {
    // window.particlesJS.load('particles-js', 'particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
  }

  render() {
    return (
      <div className="app">
        <div id="particles-js"></div>
        <nav>
          <Link to="features" smooth={true}>Features</Link>
          <Link to="roadmap" smooth={true}>Roadmap</Link>
          <Link to="wallets" smooth={true}>Wallets</Link>
          <Link to="mining" smooth={true}>Mining</Link>
        </nav>
        <header className="header">
          <div className="logo"><img src={logo} /></div>
          <div className="title">Haven</div>
          <div>Untraceable crypto payments meets offshore banking.</div>
        </header>

        <div className="section-container">
          <div name="features" style={{padding: "20px 20px 20px"}}>
            <h2>Features</h2>
          </div>
          <section >
            <div className="box">
              <div className="heading">Hidden</div>
              <p>Haven uses ring signatures and stealth addresses meaning payments cannot be linked back to any user.</p>
            </div>
            <div className="box">
              <div className="heading">Fast</div>
              <p>Transaction speeds are lightning fast compared to existing coins. Average payment confirmation is under 5 seconds.</p>
            </div>
            <div className="box">
              <div className="heading">Decentralized</div>
              <p>The Haven Protocol is decentralized and open source meaning no central control over the network. Nothing is censored.</p>
            </div>
          </section>
          {/* <div style={{padding: "40px 20px 20px"}}>
            <p>Native Smart Contracts built into the Haven Protocol</p>
          </div> */}
          <section>
            <div className="box long">
              <div className="heading" style={{textAlign: "center"}}><img src={logo}/>Offshore Holding <Link to="roadmap" smooth={true} className="soon">coming soon</Link></div>
              <p>At the core of the Haven Protocol is the Offshore Holding smart contract that allows cold storage of coins in terms of USD
              value to avoid crypto volatility and keep money out of the traditional banking system without risk of loss.</p>
            </div>
          </section>
          <div style={{padding: "60px 20px 0px"}} name="roadmap">
            <h2>Haven Protocol Roadmap</h2>
          </div>
          <section>
            <Roadmap />
          </section>

          <div style={{padding: "60px 20px 20px"}} name="wallets">
            <h2>Wallet Downloads</h2>
          </div>
          <section>
            <Wallet />
          </section>

          <div style={{padding: "60px 20px 20px"}} name="mining">
            <h2>Mining</h2>
          </div>
          <section>
            <Mining />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
