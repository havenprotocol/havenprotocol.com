import React, { Component } from 'react';
import './Team.css'
import donjor from './donjor.png'
import havendev from './havendev.png'
import cryptomach from './cryptomach.png'
import gigabyted from './gigabyted.png'
import catoshi from './catoshi.png'
import shiggidy from './shiggidy.png'
import taiwanesepanda from './taiwanesepanda.png'

class Team extends Component {

  render() {
    return (
      <div className="team">
        <div className="team-row">
          <div className="item">
              The Haven Protocol Team is anonyomus, and takes anonymity seriously.
          </div>
        </div>
          <div className="team-row">
            <div className="item">
              This is because the privacy coin community naturally highly values the anonymity of individuals. As a community based project, with no ICO, the lack of corporatisation is key.
              Anyone can contribute to the open source project and is highly encouraged to do so.
              It is very important to stay anonymous when contributing to the development of a privacy coin.
              Publically known team members of very popular and predominate privacy coins have been held up in airports for being associated with their respective projects.
              By the very nature of Haven Protocol, it's important that the team take precautions that limit the impact anti privacy coin legislation could have on the ongoing development.
            </div>
          </div>

        <div className="team-row" style={{paddingTop: '40px'}}>
          <div className="item">
            <div className="icon">
              <a href="https://twitter.com/haven_dev">
              <img src={havendev} /></a>
              <a href="https://twitter.com/haven_dev" target="_blank"><i className="fab fa-twitter" aria-hidden="true" style={{paddingTop: '5px'}}></i></a>
              <a href="https://github.com/haven-dev" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
            </div>
          <a href="https://twitter.com/haven_dev">

                <div>Haven Dev</div>
                <div>Co-founder, Lead Developer.</div>
            </a>
            <br></br>
            <div>
              Known only as Haven Dev in the community, he theriorsed the original concept for Haven Protocol’s Offshore Storage stable coin system.
              Worked corporate in c++ and backend web dev positions for many years. C, C++, JS, Ruby and standard devops and server management primarily.
              <br></br>
              <br></br>
              Left employment to work full time on Haven post network launch. Born and raised in Auckland, New Zealand.
              Has been involved in cryptocurrencies since late 2014 and has worked on a handful of crypto projects in the past.
              His only focus now is on Haven and Offshore Storage and is by far the main contributor to the project.
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <a href="https://twitter.com/donjordev">
              <img src={donjor} /></a>
              <a href="https://twitter.com/donjordev" target="_blank"><i className="fab fa-twitter" aria-hidden="true" style={{paddingTop: '5px'}}></i></a>
              <a href="https://github.com/donjor" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
            </div>
            <a href="https://twitter.com/donjordev">
                <div>Donjor</div>
                <div>Co-founder, Lead Developer.</div>
            </a>
            <br></br>
            <div>
              Born and raised in Auckland, New Zealand. Employed at small New Zealand Software companies. Mainly working in SQL, .NET/C# with some knowledge in blockchain development
              prior to Haven Protocol.
              <br></br>
              <br></br>
              Worked with Haven Dev pre network launch and discussed the Offshore Storage concept. Left employment a few months after network launch to focus full time on Haven.
              Donjor uses his background experience in management and technical support roles to be the main voice publically for the project and allows Haven Dev to focus on the core development.
            </div>
          </div>
        </div>

        <div className="team-row" style={{paddingTop: '40px'}}>

          <div className="item">
            <div className="icon">
              <img src={havendev} />
            </div>
            <a href="">
                <div>Crypto Grade</div>
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <a href="https://twitter.com/CryptoMach">
              <img src={cryptomach} /></a>
              <a href="https://twitter.com/CryptoMach" target="_blank"><i className="fab fa-twitter" aria-hidden="true" style={{paddingTop: '5px'}}></i></a>
            </div>
            <a href="https://twitter.com/CryptoMach">
                <div>Crypto Mach</div>
                <div>Community Moderator.</div>
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <a href="https://twitter.com/gigabyted4">
              <img src={gigabyted} /></a>
              <a href="https://twitter.com/gigabyted4" target="_blank"><i className="fab fa-twitter" aria-hidden="true" style={{paddingTop: '5px'}}></i></a>
            </div>
            <a href="https://twitter.com/gigabyted4">
                <div>Gigabyted</div>
                <div>Community Leader.</div>
            </a>
          </div>

          <div className="item">
            <div className="icon">
              <img src={havendev} />
            </div>
            <a href="">
                <div>Jriggs28</div>
                <div>Community Leader.</div>
            </a>
          </div>

      </div>

      <div className="team-row" style={{paddingTop: '40px'}}>

        <div className="item">
          <div className="icon">
            <a href="https://twitter.com/shiggidy">
            <img src={shiggidy} /></a>
            <a href="https://twitter.com/shiggidy" target="_blank"><i className="fab fa-twitter" aria-hidden="true" style={{paddingTop: '5px'}}></i></a>
          </div>
          <a href="https://twitter.com/shiggidy">
              <div>Shiggidy</div>
              <div>Community Leader.</div>
          </a>
        </div>

        <div className="item">
          <div className="icon">
            <a href="https://twitter.com/PandaTaiwanese">
            <img src={taiwanesepanda} /></a>
            <a href="https://twitter.com/PandaTaiwanese" target="_blank"><i className="fab fa-twitter" aria-hidden="true" style={{paddingTop: '5px'}}></i></a>
          </div>
          <a href="https://twitter.com/PandaTaiwanese">
              <div>TaiwanesePanda</div>
              <div>Community Leader.</div>
          </a>
        </div>





      </div>


    </div>
    );
  }
}

export default Team;
