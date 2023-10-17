// Careers.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import {Typography, Box, Button } from '@material-ui/core'; 

const handleClick = () => {
  fetch('https://ddz0uxvooi.execute-api.us-east-2.amazonaws.com/prod')
  .then(response => response.json())
  .then(data => console.log(data));
}

const targetDate = new Date('2023-09-01'); // Replace with your actual date

// Current date
const currentDate = new Date();

// Calculate the time difference in milliseconds
const timeDifference = currentDate - targetDate;

// Calculate the number of days
const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Display the result
console.log(`Posted ${daysAgo} days ago`);

// working on aws API

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