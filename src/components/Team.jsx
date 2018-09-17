import React, { Component } from 'react';
import './Team.css'
import donjor from './donjor.png'
import havendev from './havendev.png'
import cryptomach from './cryptomach.png'
import jriggs from './jriggs.png'
import florent from './florent.jpeg'
import cryptograde from './cryptograde.png'
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
              The Haven Protocol Team is anonymous and takes anonymity seriously.
          </div>
        </div>
          <div className="team-row">
            <div className="item">
              This is because the privacy coin community naturally highly values the anonymity of individuals and entities. As a community-based project, with no ICO, the lack of corporatisation is key.
              Anyone anywhere in the world can contribute to thus open source project and is highly encouraged to do so.
              It is paramount to stay anonymous when contributing to the development of a privacy coin.
              Publicly known team members of other popular and predominate privacy coins have been held up in airports and other federally regulated locations for being associated with their respective projects.
              By the very nature of Haven Protocol, it is critically important that the team takes precautions that limit the impact that anti-privacy coin legislation could have on the ongoing development.
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
              Known in the community only as "Haven Dev", Haven Dev theorised the original concept for Haven Protocol’s Offshore Storage stable coin system.
              Haven Dev previously worked corporate in C++ and backend web dev positions for many years. With a primary focus on C, C++, JS, Ruby and standard devops and server management.
              <br></br>
              <br></br>
              Haven Dev left employment to work full time on Haven Protocol after its network launch. Born and raised in Auckland, New Zealand, Haven Dev
              has been involved in cryptocurrencies since late 2014 and has worked on a handful of crypto projects in the past.
              His only focus now is on Haven Protocol and Offshore Storage and is by far the main contributor to the project.
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
              Known in the community only as “Donjor”, Donjor was born and raised in Auckland, New Zealand.
              Donjor was previously employed at small New Zealand software companies and mainly worked in SQL and .NET/C# with some knowledge in blockchain development
              prior to working full time on  Haven Protocol.
              <br></br>
              <br></br>
              Donjor was involved in the Haven Protocol development before the network launch and was also a part of theorising the Offshore Storage concept.
              Donjor left employment a few months after Haven Protocol's network launch to focus full time on the project.
              Donjor uses his background experience in management and technical support roles to be the main voice publicly for the project and allows Haven Dev to focus on the core development.
            </div>
          </div>
        </div>

        <div className="team-row" style={{paddingTop: '40px'}}>

          <div className="item">
            <div className="icon">
              <img src={cryptograde} />
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
              <img src={jriggs} />
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

        <div className="item">
          <div className="icon">
            <a href="https://www.linkedin.com/in/zaher-elsahili-57840227/">
            <img src={florent} /></a>
            <a href="https://www.linkedin.com/in/zaher-elsahili-57840227/" target="_blank"><i className="fab fa-linkedin" aria-hidden="true" style={{paddingTop: '5px'}}></i></a>
          </div>
          <a href="https://www.linkedin.com/in/zaher-elsahili-57840227/">
              <div>Zaher</div>
              <div>Adviser</div>
          </a>
        </div>

      </div>


    </div>
    );
  }
}

export default Team;
