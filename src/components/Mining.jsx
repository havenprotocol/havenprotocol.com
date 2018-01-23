import React, { Component } from 'react';
import './Mining.css'

class Mining extends Component {

  render() {
    return (
      <div className="mining">
        <p>Solo Mining</p>
        <p>To solo mine you must download and build the Haven source code using the instructions below. In future this will be available through the wallet.</p>

        <pre>
          Instructions coming soon
        </pre>
        <br />
        <p>Pool Mining</p>
        <p>Download the miner from here and follow the instructions below to start pool mining</p>
        <pre>
          Instructions coming soon
        </pre>
      </div>
    );
  }
}

export default Mining;
