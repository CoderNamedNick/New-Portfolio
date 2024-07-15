import React from "react";
import Intro from "./intro";
import Header from "./header";
import Projects from "./Projects";
import Contacts from "./contacts";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Element name="intro">
        <Intro/>
      </Element>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="contacts">
      <h1 style={{paddingLeft: '40%'}}>CONTACTS</h1>
        <Contacts/>
      </Element>
    </div>
  );
}

export default App;