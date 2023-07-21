// Services.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const Services = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Services</h1>
        <p>This is the Services page content.</p>
        <Footer/>
    </div>
  );
};

export default Services;