import React, { Component } from 'react';
import './Mining.css'

class Mining extends Component {

  render() {
    return (
      <div className="mining">
        <p>Choose from one of the Haven mining pools below:</p>
        <br />
        <a className="pool-btn" target="_blank" href="http://cryptoknight.cc/haven/">cryptoknight.cc</a>
        <a className="pool-btn" target="_blank" href="http://pool.mineallcrypto.com/pool/?symbol=XHV">mineAllCrypto.com</a>
        <a className="pool-btn" target="_blank" href="https://xhv.luckypool.io/">luckypool.io</a>
        <a className="pool-btn" target="_blank" href="https://haven.miner.rocks/">haven.miner.rocks</a>
        <a className="pool-btn" target="_blank" href="https://monerise.com/?pool=haven">monerise.com</a>
      </div>
    );
  }
}

export default Mining;
