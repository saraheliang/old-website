import React from 'react';
import './NavBar.css';

// create a component by writing a function
function NavBar() {
  return(
    // navbar can use MUI navigation "drawer" for collapsable navbar
    //rest of navbar (fully expanded) will have to be custom
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