// RoadConstruction.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const RoadConstruction = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Road Construction</h1>
        <p>This is the Road Construction page content.</p>
        <Footer/>
    </div>
  );
};

export default RoadConstruction;