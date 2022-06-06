import React from 'react';
import './About.css';
import NavBar from "./NavBar";

// create a component by writing a function
function About() {
  return(
    //   Add NavBar here
    <>
        <NavBar />
        <div className="about-content">
            <img src="images/me.jpg"/>
            <p id="blurb">I’m an ENFJ, prone to smiling, lover of dogs.</p>
        </div>
        <div className="forMore">
            <p>hi</p>
        </div>
    </>
  );
}

// export default- will export this file.
export default About;