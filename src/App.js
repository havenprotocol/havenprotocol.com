import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import logo from './haven_icon_only.png'
// import donjor from './donjor.png'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Stats from './components/Stats'
import Roadmap from './components/Roadmap'
import Wallet from './components/Wallet'
import Links from './components/Links'
import Social from './components/Social'
import Team from './components/Team'

import whitepaper from './haven_protocol_whitepaper_v3.0.0.pdf'



class App extends Component {

  render() {
    return (
      <div className="app" id="page-wrap">
        <header className="header">
          <Stats />
          <canvas id="canvas"></canvas>
          <div className="container">
            <div className="content">
              <div className="logo"><img src={logo} /></div>

              <div>
                <div className="title">Haven Protocol</div>
                <div className="subtitle">Untraceable payments meets offshore banking.</div>

                <div className="whitepaper-link">
                  <a href={whitepaper} target="_blank">Read the white paper <i class="fas fa-newspaper"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="section-container container">
          <section>
            <div className="introduction" name="introduction">
              <div className="content-text">
                <p className="heading">What is Haven Protocol?</p>

                <p>Haven is an untraceable cryptocurrency with a mix of standard market pricing and stable fiat value storage. This is achieved without an
                unsustainable peg or asset backing. It achieves this with a dual coin blockchain.
                Users can mint and burn Haven [XHV] for the equivalent USD value worth of Haven Dollars [XHVD].</p>

                <p>Haven Protocol’s cryptographically unknown supply is used to facilitate the fluctuations in the total supply when users burn Haven [XHV]
                to create the stable value Haven Dollars [XHVD], while allowing Haven [XHV] to be exposed to the natural price movements of the market.</p>


                <p className="heading">Offshore Storage:</p>

                <p>Offshore Storage is Haven Protocol’s core concept that powers the minting and burning of Haven [XHV] for Haven Dollars [XHVD] and vice versa.
                In short, sending Haven [XHV] to offshore storage (burning), mints the equivalent USD value worth of the burnt Haven [XHV] in Haven Dollars [XHVD].</p>

                <p>Each Haven Dollar [XHVD] is a representation of $1 USD ‘worth of Haven’ which can be transferred to other Haven wallets.
                Users can also burn their Haven Dollars [XHVD] to mint back the amount of Haven [XHV] of equivalent value.</p>

                <p>When a user burns Haven and mints it back at a later date, they will net a different amount of Haven [XHV] if the price of Haven has changed.
                If Haven’s [XHV] price increases, they will net less Haven [XHV]. If the price decreases, they will net more Haven [XHV].
                In both cases they will have the same amount of USD worth of Haven.</p>

                <p>The key use cases for offshore storage are:</p>

                <p>Point of sales/payment gateway systems where goods can be bought with Haven and stores can immediately lock the USD/fiat value in
                to protect from price fluctuations. This has the added benefit of keeping the stores'' business and income completely
                hidden on the blockchain as neither their wallet address or amounts are revealed.</p>

                <p>Storing large amount of money outside of the traditional banking system. Privacy focused cryptos are perfect for this but
                without a reliable way to maintain value through fluctuations the process of holding could be costly. Sending Haven offshore
                quite literally creates cryptographically untraceable US Dollars. </p>


                <p className="heading">Untraceable | Hidden | Decentralized</p>
                <p>Haven uses ring signatures, ring confidential transactions and stealth addresses meaning payments cannot be tracked or linked back to any user.</p>
                <p>Wallet addresses and transaction amounts are completely obfuscated on the Haven blockchain making all activity invisible.</p>
                <p>The Haven Protocol is decentralized and open source meaning no central control over the network. Nothing is censored.</p>

              </div>
              <div className="content-links">
                <Social />
              </div>
            </div>
          </section>
          <section name="downloads">
            <Wallet />
          </section>
          <div style={{color: "#fff", padding: "60px 20px 0px"}}>
            <p className="heading">Haven Protocol Roadmap</p>
          </div>
          <section name="roadmap">
            <Roadmap />
          </section>
          <div style={{color: "#fff", padding: "60px 20px 0px"}}>
            <p className="heading">Haven Protocol Team</p>
          </div>
          <section name="team">
            <Team />
          </section>
          <section name="links">
            <Links />
          </section>
        </div>
      </div>
    );
  }

  componentDidMount() {
        // Little Canvas things
    var canvas = document.querySelector("#canvas"),
        ctx = canvas.getContext('2d');

    // Set Canvas to be window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuration, Play with these
    var config = {
      particleNumber: 50,
      maxParticleSize: 10,
      maxSpeed: 5,
      colorVariation: 50
    };

    // Colors
    var colorPalette = {
        bg: {r:12,g:9,b:29},
        matter: [
          {r:36,g:18,b:42}, // darkPRPL
          {r:78,g:36,b:42}, // rockDust
          {r:252,g:178,b:96}, // solorFlare
          {r:253,g:238,b:152} // totesASun
        ]
    };

    // Some Variables hanging out
    var particles = [],
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        drawBg,

    // Draws the background for the canvas, because space
    drawBg = function (ctx, color) {
        ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    };

    // Particle Constructor
    var Particle = function (x, y) {
        // X Coordinate
        this.x = x || Math.round(Math.random() * canvas.width);
        // Y Coordinate
        this.y = y || Math.round(Math.random() * canvas.height);
        // Radius of the space dust
        this.r = Math.ceil(Math.random() * config.maxParticleSize);
        // Color of the rock, given some randomness
        this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],true );
        // Speed of which the rock travels
        this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
        // Direction the Rock flies
        this.d = Math.round(Math.random() * 360);
    };

    // Provides some nice color variation
    // Accepts an rgba object
    // returns a modified rgba object or a rgba string if true is passed in for argument 2
    var colorVariation = function (color, returnString) {
        var r,g,b,a, variation;
        r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.r);
        g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.g);
        b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.b);
        a = Math.random() + .5;
        if (returnString) {
            return "rgba(" + r + "," + g + "," + b + "," + a + ")";
        } else {
            return {r,g,b,a};
        }
    };

    // Used to find the rocks next point in space, accounting for speed and direction
    var updateParticleModel = function (p) {
        var a = 180 - (p.d + 90); // find the 3rd angle
        p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
        p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
        return p;
    };

    // Just the function that physically draws the particles
    // Physically? sure why not, physically.
    var drawParticle = function (x, y, r, c) {
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.arc(x, y, r, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();
    };

    // Remove particles that aren't on the canvas
    var cleanUpArray = function () {
        particles = particles.filter((p) => {
          return (p.x > -100 && p.y > -100);
        });
    };


    var initParticles = function (numParticles, x, y) {
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(x, y));
        }
        particles.forEach((p) => {
            drawParticle(p.x, p.y, p.r, p.c);
        });
    };

    // That thing
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function(callback) {
            window.setTimeout(callback, 1000 / 60);
         };
    })();


    // Our Frame function
    var frame = function () {
      // Draw background first
      drawBg(ctx, colorPalette.bg);
      // Update Particle models to new position
      particles.map((p) => {
        return updateParticleModel(p);
      });
      // Draw em'
      particles.forEach((p) => {
          drawParticle(p.x, p.y, p.r, p.c);
      });
      // Play the same song? Ok!
      window.requestAnimFrame(frame);
    };

    // Click listener
    document.body.addEventListener("click", function (event) {
        var x = event.clientX,
            y = event.clientY;
        cleanUpArray();
        initParticles(config.particleNumber, x, y);
    });

    // First Frame
    frame();

    // First particle explosion
    initParticles(config.particleNumber);

    let pause = false;

    window.onblur = function() {
        pause = true;
    }
    window.onfocus = function() {
        pause = false;
    }

    setInterval(function(){ if (pause == false) initParticles(5); }, 1000);
  }
}

export default App;
