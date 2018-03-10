import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import './Roadmap.css'

class Roadmap extends Component {

  render() {
    return (
      <div className="roadmap">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q1 2018"
            iconStyle={{ background: '#0F232B', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">Live Network Release</h4>
          <p>
            Haven Protocol network is launched and available to public.
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q2 2018"
            iconStyle={{ background: '#ccc', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">IOS + Android Wallets</h4>
          <p>
            IOS and Android mobile wallets available for download with a focus on usability for first time users of cryptocurrency.
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q3 2018"
            iconStyle={{ background: '#ccc', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">I2P Integration</h4>
          <p>
            I2P integration to further anonymize the network by removing IP addresses associated with transactions.
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q4 2018"
            iconStyle={{ background: '#ccc', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">Haven Offshore Storage Smart Contract</h4>
          <p>
            Implementation of the Haven Protocol Offshore Storage smart contract that allows users to store their
            coins in terms of USD value to avoid volatility and keep money out of the traditional banking system without risk of loss.
          </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default Roadmap;
