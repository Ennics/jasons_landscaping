// Demolition.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const Demolition = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Demolition</h1>
        <p>This is the Demolition page content.</p>
        <Footer/>
    </div>
  );
};

export default Demolition;