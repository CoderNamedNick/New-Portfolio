import React from "react";
import XLogo from './icons/icons8-twitterx-50.png'
import GithubLogo from './icons/icons8-github-96.png'
import MailLogo from './icons/icons8-mail-94.png'

const Contacts = () => {

  return (
    <div className="Contacts-Main"> 
      <div className="Contacts-div">
        <a href="https://x.com/CoderNamedNick">
          <img className="contacts-imgs" src={XLogo} alt="X/Twitter"></img>
        </a>
      </div>
      <div className="Contacts-div">
        <a href="mailto:nclloyd422@hotmail.com">
          <img className="contacts-imgs" src={MailLogo} alt="MAIL" />
        </a>
      </div>
      <div className="Contacts-div">
        <a href="https://github.com/CoderNamedNick">
        <img className="contacts-imgs" src={GithubLogo} alt="GITHUB"></img>
        </a>
      </div>
    </div>
  );
}

export default  Contacts
