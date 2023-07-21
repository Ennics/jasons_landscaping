// Careers.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const Careers = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Careers</h1>
        <p>This is the Careers page content.</p>
        <Footer/>
    </div>
  );
};

export default Careers;