// SepticSystems.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const SepticSystems = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Septic Systems</h1>
        <p>This is the Septic Systems page content.</p>
        <Footer/>
    </div>
  );
};

export default SepticSystems;