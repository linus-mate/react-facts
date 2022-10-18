import React from "react";
import logo from './logo.svg';

function NavBar() {
    return ( 
    <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>ReactFacts</h3>
        <h4>React course - Project</h4>
    </nav>

    );
  }
  
  export default NavBar;