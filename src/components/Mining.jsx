import React, { Component } from 'react';
import './Mining.css'

class Mining extends Component {

  render() {
    return (
      <div className="mining">
        <h3>Solo Mining</h3>
        <p>To solo mine you must download and build the Haven source code using the instructions below. In future this will be available through the wallet.</p>

        <pre>
          Instructionduinos
        </pre>
        <br />
        <h3>Pool Mining</h3>
        <p>Download the miner from here and follow the instructions below to start pool mining</p>
        <pre>
          More Instructionduinos
        </pre>
      </div>
    );
  }
}

export default Mining;
