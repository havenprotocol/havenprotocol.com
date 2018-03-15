import React, { Component } from 'react';
import './Social.css'

class Support extends Component {

  render() {
    return (
      <div className="social-links">
        <div className="social">
          <div className="item">
            <a href="https://discord.gg/vWQ2GZX" target="_blank"><i className="fab fa-discord" aria-hidden="true"></i></a>
          </div>
          <div className="item">
            <a href="https://twitter.com/HavenProtocol" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          </div>
          <div className="item">
            <a href="https://medium.com/@havencurrency" target="_blank"><i className="fab fa-medium" aria-hidden="true"></i></a>
          </div>
          <div className="item">
            <a href="https://www.reddit.com/r/havenprotocol/" target="_blank"><i className="fab fa-reddit" aria-hidden="true"></i></a>
          </div>
          <div className="item">
            <a href="https://github.com/havenprotocol" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
