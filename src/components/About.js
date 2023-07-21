// About.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const About = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>About Us</h1>
        <p>This is the About Us page content.</p>
        <Footer/>
    </div>
  );
};

export default About;