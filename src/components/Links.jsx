import React, { Component } from 'react';
import './Links.css'

class Mining extends Component {

  render() {
    return (
      <div className="links">
        <div className="category">
          <p className="heading">Mining Pools</p>
	  <a target="_blank" href="https://pool.havenprotocol.com/"><b>pool.havenprotocol.com</b></a>
	  <a target="_blank" href="http://cryptoknight.cc/haven/">cryptoknight.cc</a>
          <a target="_blank" href="http://pool.mineallcrypto.com/pool/?symbol=XHV">mineAllCrypto.com</a>
          <a target="_blank" href="https://xhv.luckypool.io/">luckypool.io</a>
          <a target="_blank" href="https://haven.miner.rocks/">haven.miner.rocks</a>
          <a target="_blank" href="https://xhv.dark-mine.su/">xhv.dark-mine.su</a>
          <a target="_blank" href="https://haven.herominers.com/">herominers.com</a>
        </div>
        <div className="category">
          <p className="heading">Exchanges</p>
          <a target="_blank" href="https://tradeogre.com/exchange/BTC-XHV">TradeOgre</a>
          <a target="_blank" href="https://nanex.co/exchange/XHVNANO">Nanex</a>
          <a target="_blank" href="https://www.southxchange.com/Market/Book/XHV/BTC">southxchange</a>
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
