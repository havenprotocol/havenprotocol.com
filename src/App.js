import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import logo from './haven_icon.png'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Roadmap from './components/Roadmap'
import Wallet from './components/Wallet'
import Mining from './components/Mining'
import Support from './components/Support'
import whitepaper from './haven_whitepaper.pdf'


class App extends Component {

  render() {
    return (
      <div className="app" id="page-wrap">
        <header className="header">
          <div className="container">
            <div className="logo"><img src={logo} /></div>
            <div className="title">Haven</div>
            <div className="subtitle">Untraceable payments meets offshore banking.</div>

            <div className="links">
              <a href={whitepaper} target="_blank">Read the white paper</a>
            </div>
          </div>
        </header>

        <div className="whitepaper container">

        </div>
        <div className="section-container container">
          <section >
            <div className="box">
              <h4>Hidden</h4>
              <p>Haven uses ring signatures, ring confidential transactions and stealth addresses meaning payments cannot be tracked or linked back to any user.</p>
            </div>
            <div className="box">
              <h4>Untraceable</h4>
              <p>Wallet addresses and transaction amounts are completely obfuscated on the Haven blockchain making all activity invisible.</p>
            </div>
            <div className="box">
              <h4>Decentralized</h4>
              <p>The Haven Protocol is decentralized and open source meaning no central control over the network. Nothing is censored.</p>
            </div>
          </section>
          {/* <div style={{padding: "40px 20px 20px"}}>
            <p>Native Smart Contracts built into the Haven Protocol</p>
          </div> */}
          <section>
            <div className="box long">
              <h4 style={{textAlign: "center"}}>Offshore Holding <Link to="roadmap" smooth={true} className="soon">coming soon</Link></h4>
              <p>At the core of the Haven Protocol is the Offshore Holding smart contract that allows storage in terms of USD
              value to avoid crypto volatility and keep money out of the traditional banking system without risk of price fluctuation.</p>
            </div>
          </section>
          <div style={{padding: "60px 20px 0px"}} name="roadmap">
            <h2>Haven Protocol Roadmap</h2>
          </div>
          <section>
            <Roadmap />
          </section>

          <div style={{padding: "60px 20px 20px"}} name="wallets">
            <h2 style={{marginBottom: "10px"}}>Wallet Downloads</h2>
            <p>Wallets give you secure storage and the ability to send and receive payments of Haven.</p>
            <p>All wallet downloads <b>coming soon</b>.</p>
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
          <section style={{padding: "40px 0"}}>
            <Support />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
