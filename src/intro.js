import React from "react";
import PFP from './images/IMG_8897.png'
import GithubLogo from './icons/icons8-github-48.png'
import GitLogo from './icons/icons8-git-96.png'
import VScodeLogo from './icons/icons8-vs-code-96.png'
import NPMLogo from './icons/icons8-npm-96.png'
import HTMLLogo from './icons/icons8-html-96.png'
import CSSLogo from './icons/icons8-css-96.png'
import JsLogo from './icons/icons8-javascript-96.png'
import ReactLogo from './icons/icons8-react-js-80.png'
import NodeLogo from './icons/icons8-node-js-96.png'
import ExpressLogo from './icons/icons8-express-js-96.png'
import MongoDBLogo from './icons/icons8-mongo-db-96.png'

const Intro = () => {

  return (
    <div className="intro-div" >
      <div className="Pfp-and-Name">
        <img src={PFP} alt="ME" className="Pfp">

        </img>
        <div className="Name">
          <div>Nicholas Lloyd, 21</div>
          <div>Junior Web Developer</div>
          <div><a href="https://github.com/CoderNamedNick">Github</a></div>
          <div><a href="https://github.com/CoderNamedNick/React-Social-App">My Favorite Project Repo</a></div>
        </div>
      </div>
      <div className="Icons">
        <img className="Logos" src={GithubLogo}></img>
        <img className="Logos" src={GitLogo}></img>
        <img className="Logos" src={ VScodeLogo}></img>
        <img className="Logos" src={NPMLogo}></img>
        <img className="Logos" src={HTMLLogo}></img>
        <img className="Logos" src={CSSLogo}></img>
        <img className="Logos" src={JsLogo}></img>
        <img className="Logos" src={ReactLogo}></img>
        <img className="Logos" src={NodeLogo}></img>
        <img className="Logos" src={ExpressLogo}></img>
        <img className="Logos" src={MongoDBLogo}></img>
      </div>
    </div>
  )
}

export default Intro 