// first thing you need to do in React, is create a component. App.js is a component
// a component is a file that holds all the logic (html, logic, styling) in ONE file.

// let's create this app component and then render it to the screen

// when creating a component, always import react from React
import React from 'react';
import './Home.css';
import NavBar from "../NavBar/NavBar";

import { Button, Popover, Typography, Link as MUILink, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

// create a component by writing a function
function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
    <>
        {/* <NavBar></NavBar> */}
        <div className="home-content">
            <h1>HI, I'M <span style={{color:"white"}}>SARAH</span>.</h1>
            <h2>Software engineer @USC.</h2>
            <div className="home-buttons">
                <Link id="about-me-link" to="/about"><Button id="MUI-about-me" variant="contained">about me</Button></Link>
                <Link id="see-my-work-link" to="/portfolio"><Button id="MUI-see-my-work" variant="contained">see my work</Button></Link>
            </div>
            <div id="contact-logos">
                <MUILink rel="noopener" href="https://github.com/saraheliang" target="_blank"><GitHub fontSize='large' className='icon' /></MUILink>
                <MUILink rel="noopener" href="https://www.linkedin.com/in/saraheliang/" target="_blank"><LinkedIn fontSize='large' className='icon' /></MUILink>
                <MUILink rel="noopener" aria-describedby={id} onClick={handleClick} sx={{ cursor: 'pointer' }} ><Email fontSize='large' className='icon' /></MUILink>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                >
                    <Typography className="center-this"><span id="email-msg">seliang@usc.edu</span></Typography>
                </Popover>
            </div>
        </div>
    </>
  );
}

// export default- will export this file.
export default Home;

// FINAL: we create a component, export it -> index.js