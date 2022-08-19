import React from 'react';
import './About.css';
import NavBar from "../NavBar/NavBar";
import { Button, Divider, Link as MUILink } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';

// create a component by writing a function
function About() {
  return(
    //   Add NavBar here
    <div className="about-parent-container">
        {/* <div className="about-content"> */}
            <img src="images/me.jpg"/>
            <p id="blurb">I’m an ENFJ, prone to smiling, lover of dogs.</p>
        {/* </div> */}
        {/* <MUILink href='../Home'><Button variant="contained"><ArrowBackIos fontSize='small'/>Back</Button></MUILink> */}
        {/* <Divider></Divider> */}
        <div className="word-container">
          <div className="container">
            <h1 className="about-header">Who am I?</h1>
            <h3><strong>Hmmm... that's a bit tough to answer, but I'll do my best to take you through everything that I think makes me, me!</strong></h3>
          </div>
          <div className="container container2">
            <p>At home, I'm the youngest of three and a casual tennis player, baker of macarons (and the occasional banana bread), artist, photographer of everyday moments, pianist, cook, and total type A <MUILink rel="noopener" id="style-link" href="https://sarahliang.notion.site/recipes-d7934b7dc75640ae9d93a39cc692ffca" target="_blank">Notion</MUILink> user.</p>
            <p>Professionally, I'm an aspiring <a id="bold-color">software engineer</a> focused on exploring <strong>socially responsible tech</strong> and its intersection with my passions in <strong>genuine human connection</strong>, <strong>empathy</strong>, and <strong>creative expression</strong>. I’m spending this summer as a Software Engineer Intern @<MUILink rel="noopener" id="style-link" href="https://www.experian.com/" target="_blank">Experian</MUILink>.</p>

            <p>On campus, you can find me exploring art and tech at <MUILink rel="noopener" id="style-link" href="https://sarahliang.notion.site/recipes-d7934b7dc75640ae9d93a39cc692ffca" target="_blank">Creative Labs</MUILink> or filling the gender gap in tech and coordinating sponsorships for <MUILink rel="noopener" id="style-link" href="https://athenahacks.com/" target="_blank">AthenaHacks</MUILink> .</p>

            <p>Personally/spiritually, I'm exploring meditation, journaling, yoga, fitness, and other means of self-care and self-improvement. I love to <strong>learn</strong>, and am learning how much there is to learn with every passing day.</p>
          </div>
        </div>
    </div>
  );
}

// export default- will export this file.
export default About;