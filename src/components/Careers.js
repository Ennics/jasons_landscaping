// Careers.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import {Typography, Box, Button } from '@material-ui/core'; 

const handleClick = () => {
  fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => console.log(data));
}

const Careers = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Careers</h1>
        <p>This is the Careers page content.</p>
        <Button onClick={handleClick}>
          GET
        </Button>
        <Footer/>
    </div>
  );
};

export default Careers;