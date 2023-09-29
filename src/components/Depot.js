// Depot.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const Depot = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Depot</h1>
        <p>This is the Depot page content.</p>
        <Footer/>
    </div>
  );
};

export default Depot;