import React, { Component } from 'react';
import './Links.css'

class Mining extends Component {

  render() {
    return (
      <div className="links">
        <div className="category">
          <p className="heading">Mining Pools</p>
          <a target="_blank" href="https://xhv.luckypool.io/">luckypool.io</a>
	        <a target="_blank" href="https://pool.havenprotocol.com/">pool.havenprotocol.com</a>
          <a target="_blank" href="https://haven.hashvault.pro/">haven.hashvault.pro</a>
          <a target="_blank" href="https://haven.herominers.com/">herominers.com</a>
          <a target="_blank" href="https://xhv.fairpool.xyz/">fairpool.xyz</a>
          <a target="_blank" href="http://pool.haven.frackingminer.com/">pool.haven.frackingminer.com</a>
        </div>
        <div className="category">
          <p className="heading">Exchanges</p>
          <a target="_blank" href="https://bittrex.com/Market/Index?MarketName=BTC-XHV">Bittrex</a>
          <a target="_blank" href="https://upbit.com/exchange?code=CRIX.UPBIT.BTC-XHV">Upbit</a>
          <a target="_blank" href="https://tradeogre.com/exchange/BTC-XHV">TradeOgre</a>
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
