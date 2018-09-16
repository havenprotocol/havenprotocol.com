import React, { Component } from 'react';
import './Links.css'

class Mining extends Component {

  render() {
    return (
      <div className="links">
        <div className="category">
          <p className="heading">Mining Pools</p>
	        <a target="_blank" href="https://pool.havenprotocol.com/"><b>pool.havenprotocol.com</b></a>
          <a target="_blank" href="https://xhv.luckypool.io/">luckypool.io</a>
          <a target="_blank" href="https://haven.hashvault.pro/">haven.hashvault.pro</a>
          <a target="_blank" href="https://haven.herominers.com/">herominers.com</a>
          <a target="_blank" href="https://xhv.fairpool.xyz/">fairpool.xyz</a>
          <a target="_blank" href="https://haven.miner.rocks/">haven.miner.rocks</a>
          <a target="_blank" href="http://pool.haven.frackingminer.com/">pool.haven.frackingminer.com</a>
        </div>
        <div className="category">
          <p className="heading">Exchanges</p>
          <a target="_blank" href="https://tradeogre.com/exchange/BTC-XHV">TradeOgre</a>
          <a target="_blank" href="https://www.southxchange.com/Market/Book/XHV/BTC">SouthXchange</a>
          <a target="_blank" href="https://altex.exchange/markets&pair=BTC_XHV">Altex</a>
          <a target="_blank" href="https://palitanx.com/exchange/BTC-XHV">Palitanx</a>
        </div>
        <div className="category">
          <p className="heading">Other</p>
          <a target="_blank" href="https://explorer.havenprotocol.com/">Block Explorer</a>
          <a target="_blank" href="https://bitcointalk.org/index.php?topic=2989487">Bitcointalk Post</a>
        </div>
      </div>
    );
  }
}

export default Mining;
