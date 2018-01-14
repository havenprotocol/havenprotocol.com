import React, { Component } from 'react';
import './Wallet.css'

class Wallet extends Component {

  render() {
    return (
      <div className="wallet">
        <div className="item">
          <div className="download">
            <i className="fa fa-windows"></i>
            <div>Download Windows Wallet</div>
          </div>
        </div>
        <div className="item">
          <div className="download">
            <i className="fa fa-apple"></i>
            <div>Download OSX Wallet</div>
          </div>
        </div>
        <div className="item">
          <div className="download">
            <i className="fa fa-linux"></i>
            <div>Download Linux Wallet</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
