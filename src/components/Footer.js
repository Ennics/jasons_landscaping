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
      <p>© {new Date().getFullYear()} Your Website Name</p>
      <div>
        {/* Replace the Link components with simple text placeholders */}
        <span className={classes.links}>Home</span>
        <span className={classes.links}>About Us</span>
        <span className={classes.links}>Services</span>
        <span className={classes.links}>Products</span>
        <span className={classes.links}>Careers</span>
        <span className={classes.links}>Contact Us</span>
      </div>
    </div>
  );
};

export default Footer;
