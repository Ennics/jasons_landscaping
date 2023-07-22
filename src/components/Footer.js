import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
  footer: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto', // Push the footer to the bottom
  },
  links: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
  },
});

function Footer() {
  const classes = styles();
  return (
    <div className={classes.footer}>
      <p>© {new Date().getFullYear()} JASON'S LANDSCAPING INC.</p>
      <div>
        {/* Replace the Link components with simple text placeholders */}
        <Link to="/" className={classes.links}>Home</Link>
        <Link to="/about" className={classes.links}>About Us</Link>
        <Link to="/services" className={classes.links}>Services</Link>
        <Link to="/products" className={classes.links}>Products</Link>
        <Link to="/careers" className={classes.links}>Careers</Link>
        <Link to="/contact" className={classes.links}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
