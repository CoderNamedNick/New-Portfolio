import React from "react";
import { Link } from "react-scroll";

const Header = () => {

  return (
    <div className="header">
      <Link to="intro" smooth={true} duration={500}>
        <div>Intro</div>
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        <div>Projects</div>
      </Link>
      <Link to="contacts" smooth={true} duration={500}>
        <div>Contacts</div>
      </Link>
    </div>
  );
}

export default Header