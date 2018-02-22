import React, { Component } from 'react';
import './Wallet.css'

class Wallet extends Component {

  render() {
    return (
      <div className="wallet">
        <div className="wallet-row">
          <a href="https://havenwallet.com" target="_blank" className="item">
            <div className="download">
              <i className="fa fa-wifi"></i>
              <div>Use Online Wallet</div>
            </div>
          </a>
        </div>
        <div className="wallet-row">
          <a href="https://github.com/havenprotocol/haven/releases/download/v1.0.0/haven-gui-windows-1.0.0.zip" className="item">
            <div className="download">
              <i className="fab fa-windows"></i>
              <div>Download Windows GUI + CLI</div>
            </div>
          </a>
          <a href="https://github.com/havenprotocol/haven/releases/download/v1.0.0/haven-cli-mac-osx-1.0.0.zip" className="item">
            <div className="download">
              <i className="fab fa-apple"></i>
              <div>Download OSX CLI</div>
            </div>
          </a>
          <a href="https://github.com/havenprotocol/haven/releases/download/v1.0.0/haven-cli-linux-x64-1.0.0.zip" className="item">
            <div className="download">
              <i className="fab fa-linux"></i>
              <div>Download Linux CLI</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Wallet;
