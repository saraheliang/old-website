// first thing you need to do in React, is create a component. App.js is a component
// a component is a file that holds all the logic (html, logic, styling) in ONE file.

// let's create this app component and then render it to the screen

// when creating a component, always import react from React
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

  // import component
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

// create a component by writing a function
function App() {
  return(
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
    </>
  );
}

// export default- will export this file.
export default App;

// FINAL: we create a component, export it -> index.js