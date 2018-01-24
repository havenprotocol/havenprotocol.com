import React, { Component } from 'react';
import './Support.css'

class Support extends Component {

  render() {
    return (
      <div className="support">
        <div className="social">
          <div className="item">
            <i className="fa fa-reddit" aria-hidden="true"></i>
          </div>
          <div className="item">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div className="item">
            <i className="fa fa-github" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
