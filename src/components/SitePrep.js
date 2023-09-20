// SitePrep.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const SitePrep = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Site Prep</h1>
        <p>This is the Site Prep page content.</p>
        <Footer/>
    </div>
  );
};

export default SitePrep;