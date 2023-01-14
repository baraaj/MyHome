import React from 'react';
import './navbar.css';

import { useState } from 'react';
import {GiHamburgerMenu}from 'react-icons/gi';

const Navbar = () => {
 
    return (
        
            <nav className= 'navbar  nav-2 navbar-expand-lg border-bottom border-secondary'>
  <a className="navbar-brand" href="/"><i></i>My Home</a>
 
  <button className="navbar-toggler navbar-dark pull-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <GiHamburgerMenu/>
  </button>
 
  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <div className="navbar-nav">
    <a style={{paddingLeft:"120px"}}className="nav-item nav-link" href="/">Home</a>
      <a style={{paddingLeft:"120px"}}className="nav-item nav-link" href="/Annonce">Add Article</a>
      <a style={{paddingLeft:"220px"}}className="nav-item nav-link" href="/Login">Login</a>
    </div>
    
  </div>
  
</nav>
      
    );
}

export default Navbar;