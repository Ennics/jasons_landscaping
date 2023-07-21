// Contact.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const Contact = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Contact</h1>
        <p>This is the Contact page content.</p>
        <Footer/>
    </div>
  );
};

export default Contact;