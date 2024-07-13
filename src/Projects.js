import React from "react";
import Project1 from './images/Screenshot 2024-01-22 172206.png'
import Project2 from './images/Screenshot 2024-03-05 121010.png'
import Project3 from "./images/Screenshot 2024-03-22 121007.png"
import Project4 from "./images/Tavern Main Page.png"

const Projects = () => {

  return(
    <div className="Project-main">
      <h1 style={{paddingLeft: '40%'}}>PROJECTS</h1>
      <div className="Projects">
        <div className="Projects-img-and-links">
          <img src={Project1} className="ProjectImgs"></img>
          <div>
            <h2>HIDIVE CLONE</h2>
            <h2>SEE IN ACTION</h2>
            <h2>GITHUB REPOSITORY</h2>
          </div>
        </div>
        <div className="project-description">
          This Is a Hidive Clone made from just the basics, HTML, CSS , and Javascript. 
          The best way to learn fundamentals is to make something big. This Was my first and most entertaining project.
        </div>
      </div>
      <div className="Projects">
        <div className="Projects-img-and-links">
          <img src={Project2} className="ProjectImgs"></img>
          <div>
            <h2>RPG REACT GAME</h2>
            <h2>SEE IN ACTION</h2>
            <h2>GITHUB REPOSITORY</h2>
          </div>
        </div>
        <div className="project-description">
          A RPG game i made with react although it is not the best i learned from it and I have Always
          played games and wanted to make one. it was fun to make and taught me alot and ways to improve.
        </div>
      </div>
      <div className="Projects">
        <div className="Projects-img-and-links">
          <img src={Project3} className="ProjectImgs"></img>
          <div>
            <h2>Blog</h2>
            <h2>SEE IN ACTION</h2>
            <h2>GITHUB REPOSITORY</h2>
          </div>
        </div>
        <div className="project-description">
          My Personal Blog i made althrough i dont update regualrly i still made it learning different 
          enviroments that come with react such as routes and other cool features.
        </div>
      </div>
      <div className="Projects">
        <div className="Projects-img-and-links">
          <img src={Project4} className="ProjectImgs"></img>
          <div>
            <h2>Tavern</h2>
            <h2>SEE IN ACTION</h2>
            <h2>Front-End GITHUB REPOSITORY</h2>
            <h2>Back-End GITHUB REPOSITORY</h2>
          </div>
        </div>
        <div className="project-description">
          My Newest and Favorite Project Tavern is a medevil fantasy cummunity hub 
          where people can enjoy talking to other people and make freinds. A unique spin on social media that helps
          people like me make friends.
        </div>
      </div>
    </div>
  )
}

export default Projects