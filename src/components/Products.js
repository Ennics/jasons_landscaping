// Products.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';

const Products = () => {
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <h1>Products</h1>
        <p>This is the Products page content.</p>
        <Footer/>
    </div>
  );
};

export default Products;