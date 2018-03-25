import React, { Component } from 'react';
import './Stats.css'

class Stats extends Component {

  constructor() {
    super()

    this.state = {
      hashrate: "",
      difficulty: "",
      height: "",
      xhvBTC: "",
      btcUSD: ""
    }
  }

  componentWillMount() {
    fetch("https://explorer.havenprotocol.com/api/networkinfo").then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        hashrate: res.data.hash_rate,
        difficulty: res.data.difficulty,
        height: res.data.height
      })
    })

    fetch("https://tradeogre.com/api/v1/ticker/BTC-XHV").then(res => {
      return res.json()
    }).then(res => {
      this.setState({xhvBTC: res.price,})
    })

    fetch("https://blockchain.info/ticker").then(res => {
      return res.json()
    }).then(res => {
      this.setState({btcUSD: res.USD.last,})
    })
  }

  toMH(hashrate) {
    if (hashrate != 0) {
      return (hashrate / 1000000).toFixed(2)
    }
  }

  toMillion(difficulty) {
    if (difficulty != 0) {
      return (difficulty / 1000000).toFixed(2)
    }
  }

  priceFormat() {
    return `${this.state.xhvBTC} BTC / $${(this.state.btcUSD * this.state.xhvBTC).toFixed(2)} USD`
  }

  render() {
    console.log(this.state.btcUSD);
    return (
      // <div className="social-links">
        <div className="stats">
          <a className="item" href="https://tradeogre.com/exchange/BTC-XHV" target="_blank">
            Price: {this.priceFormat()}
          </a>
          <div className="item">
            Height: {this.state.height}
          </div>
          <div className="item">
            Network Hashrate: {this.toMH(this.state.hashrate)} MH/sec
          </div>
        </div>
      // </div>
    );
  }
}

export default Stats;
