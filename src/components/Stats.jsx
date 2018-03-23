import React, { Component } from 'react';
import './Stats.css'

class Stats extends Component {

  constructor() {
    super()

    this.state = {
      hashrate: "",
      difficulty: "",
      height: ""
    }
  }

  componentWillMount() {
    fetch("https://explorer.havenprotocol.com/api/networkinfo").then(res => {
      return res.json()
    }).then(res => {
      console.log(res.data);
      this.setState({
        hashrate: res.data.hash_rate,
        difficulty: res.data.difficulty,
        height: res.data.height
      })
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

  render() {
    return (
      // <div className="social-links">
        <div className="stats">
          <div className="item">
            Height: {this.state.height}
          </div>
          <div className="item">
            Network Hashrate: {this.toMH(this.state.hashrate)} MH/sec
          </div>
          <div className="item">
            Network Difficulty: {this.toMillion(this.state.difficulty)} M
          </div>
        </div>
      // </div>
    );
  }
}

export default Stats;
