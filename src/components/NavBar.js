import React from 'react';
import './NavBar.css';

// create a component by writing a function
function NavBar() {
  return(
    //   Add NavBar here
    <div class="fixed-navbar">
        <p class="no-margin">home</p>
        <p>about</p>
        <p>portfolio</p>
        <p>contact</p>
    </div>
  );
}

// export default- will export this file.
export default NavBar;