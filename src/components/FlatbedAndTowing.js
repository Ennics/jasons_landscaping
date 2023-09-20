// FlatbedAndTowing.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const FlatbedAndTowing = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Flatbed And Towing</h1>
        <p>This is the Flatbed And Towing page content.</p>
        <Footer/>
    </div>
  );
};

export default FlatbedAndTowing;