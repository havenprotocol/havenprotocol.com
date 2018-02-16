import React, { Component } from 'react';
import './Wallet.css'

class Wallet extends Component {

  render() {
    return (
      <div className="wallet">
        <div className="wallet-row">
          <a href="https://havenwallet.com" target="_blank" className="item">
            <div className="download">
              <i className="fa fa-chrome"></i> + <i className="fa fa-firefox"></i> + <i className="fa fa-safari"></i>
              <div>Use Online Wallet</div>
            </div>
          </a>
        </div>
        <p>All wallet downloads <b>coming soon</b>.</p>
        <div className="wallet-row">
          <div className="item">
            <div className="download disabled">
              <i className="fa fa-windows"></i>
              <div>Download Windows Wallet</div>
            </div>
          </div>
          <div className="item">
            <div className="download disabled">
              <i className="fa fa-apple"></i>
              <div>Download OSX Wallet</div>
            </div>
          </div>
          <div className="item">
            <div className="download disabled">
              <i className="fa fa-linux"></i>
              <div>Download Linux Wallet</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
