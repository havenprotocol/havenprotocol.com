import React, { Component } from 'react';
import './Wallet.css'

class Wallet extends Component {

  render() {
    return (
      <div className="wallet">
        <div className="wallet-row">
          <div className="item">
            <i className="fa fa-wifi"></i>
            <a href="https://havenwallet.com" target="_blank" className="item">
                <div>Use Online Wallet</div>
            </a>
          </div>
          <div className="item">
            <i className="fab fa-windows"></i>
            <a href="https://github.com/havenprotocol/haven/releases/download/v1.0.0/haven-gui-windows-1.0.0.zip">
                <div>Download Windows GUI + CLI</div>
            </a>
          </div>
          <div className="item">
            <i className="fab fa-apple"></i>
            <a href="https://github.com/havenprotocol/haven/releases/download/v1.0.0/haven-gui-mac-osx-1.0.0.zip">
                Download OSX GUI
            </a>
            <a href="https://github.com/havenprotocol/haven/releases/download/v1.0.0/haven-cli-mac-osx-1.0.0.zip">
                <div>Download OSX CLI</div>
            </a>
          </div>
          <div className="item">
            <i className="fab fa-linux"></i>
            <a href="https://github.com/havenprotocol/haven/releases/download/v1.0.0/haven-cli-linux-x64-1.0.0.zip">
                <div>Download Linux CLI</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
