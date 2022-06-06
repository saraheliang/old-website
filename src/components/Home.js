// first thing you need to do in React, is create a component. App.js is a component
// a component is a file that holds all the logic (html, logic, styling) in ONE file.

// let's create this app component and then render it to the screen

// when creating a component, always import react from React
import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

// create a component by writing a function
function Home() {
  return(
    <>
        <NavBar />
        <div className="home-content">
            <h1>HI, I'M <span style={{color:"white"}}>SARAH</span>.</h1>
            <h2>Aspiring software engineer @USC.</h2>
            <div className="home-buttons">
                <Link id="about-me-link" to="/about"><Button id="MUI-about-me" variant="contained">about me</Button></Link>
                <Link id="see-my-work-link" to="/portfolio"><Button id="MUI-see-my-work" variant="contained">see my work</Button></Link>
            </div>
            <div id="contact-logos">
                circle
            </div>
        </div>
        <div className="forMore">
            <p>hi</p>
        </div>
    </>
  );
}

// export default- will export this file.
export default Home;

// FINAL: we create a component, export it -> index.js