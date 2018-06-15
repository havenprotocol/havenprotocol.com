import React, { Component } from 'react';
import './Wallet.css'

class Wallet extends Component {

  render() {
    return (
      <div className="wallet">
        <div className="wallet-row">
          <div className="item">
            <a href="http://havenwallet.com/">
            <i className="fas fa-paperclip"></i></a>
            <a href="http://havenwallet.com/">
                <div>Generate Paper Wallet</div>
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/havenprotocol/haven/releases/download/3.0.0/haven-gui-windows-3.0.0.zip">
            <i className="fab fa-windows"></i></a>
            <a href="https://github.com/havenprotocol/haven/releases/download/3.0.0/haven-gui-windows-3.0.0.zip">
                <div>Download Windows GUI + CLI</div>
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/havenprotocol/haven/releases/download/3.0.0/haven-gui-mac-osx-3.0.0.zip">
            <i className="fab fa-apple"></i></a>
            <a href="https://github.com/havenprotocol/haven/releases/download/3.0.0/haven-gui-mac-osx-3.0.0.zip">
                <div>Download OSX GUI</div>
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/havenprotocol/haven/releases/download/3.0.0/haven-cli-linux-x64-3.0.0.zip">
            <i className="fab fa-linux"></i></a>
            <a href="https://github.com/havenprotocol/haven/releases/download/3.0.0/haven-cli-linux-x64-3.0.0.zip">
                <div>Download Linux CLI</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
