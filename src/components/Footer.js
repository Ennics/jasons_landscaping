import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Box} from '@material-ui/core'; 
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import {makeStyles} from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#a34d4b', // Grey background color
    color: '#fff', // Text color
    padding: theme.spacing(4), // Ample room around the content
    display: 'flex',
    justifyContent: 'center', // Center the sections horizontally
    flexDirection: 'row', // Arrange sections horizontally
  },
  section: {
    margin: theme.spacing(2), // Space between sections
    textAlign: 'left', // Center the content within each section
  },
  title: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '16px', // Replace with the desired font size
    fontWeight: 'bold', // Replace with the desired font weight
    marginBottom: theme.spacing(1), // Space between title and description
  },
  description: {
    fontSize: '16px', // Replace with the desired font size
    maxWidth: '300px', // Limit the width of the description box
    margin: '0 auto', // Center the description box horizontally
  },
  link: {
    color: '#ffffff', // Black color for the links
    textDecoration: 'none', // Remove underline
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '18px', // Replace with the desired font size
    margin: theme.spacing(1), // Space between each link
  },
  footerText: {
    marginTop: theme.spacing(1), // Space between links and footer text
    fontSize: '14px', // Replace with the desired font size
  },
  footerText2: {
    marginTop: theme.spacing(3), // Space between links and footer text
    fontSize: '14px', // Replace with the desired font size
  },
  underlineImage: {
    marginTop: theme.spacing(-3),
    position: "relative",
    display: "inline-block",
    width: '25px', // Adjust the width of the underline as needed
    height: '30px'
  },
}));

const Footer = () => {
  const classes = useStyles();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={classes.footer}>
      {/* First Section */}
      <Box className={classes.section}>
        <Typography variant="h4" className={classes.title}>
          OUR COMPANY
        </Typography>
        <img src="red_underline.png" alt="underline" className={classes.underlineImage}/>
        <Typography variant="body1" className={classes.description}>
          Your local construction company, proudly serving the Ottawa Valley community since 1998.
        </Typography>
        <IconButton
          component="a"
          href="https://www.facebook.com/jasonslandscapingandsnowplowing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon style={{ color: '#fff' }} />
        </IconButton>
      </Box>

      {/* Second Section */}
      <Box className={classes.section}>
        <Typography variant="h6" className={classes.title}>
          HELPFUL LINKS
        </Typography>
        <img src="red_underline.png" alt="underline" className={classes.underlineImage}/>
        <Box className={classes.footerText}>
          <Link to="/about" className={classes.link}>
              <Typography component="span" variant="h8" style={{ textDecoration: 'underline' }}>
                  About Us
              </Typography>
          </Link>
        </Box>
        <Box className={classes.footerText}>
          <Link to="/careers" className={classes.link}>
              <Typography component="span" variant="h8" style={{ textDecoration: 'underline' }}>
                  Careers
              </Typography>
          </Link>
        </Box>
        <Box className={classes.footerText}>
          <Link to="/contact" className={classes.link}>
              <Typography component="span" variant="h8" style={{ textDecoration: 'underline' }}>
                  Contact
              </Typography>
          </Link>
        </Box>
        <Typography variant="body2" className={classes.footerText2}>
          &copy; {getCurrentYear()} Jason's Landscaping and Snowplowing Inc.
        </Typography>
      </Box>

      {/* Third Section */}
      <Box className={classes.section}>
        <Typography variant="h6" className={classes.title}>
          CONTACT INFO
        </Typography>
        <img src="red_underline.png" alt="underline" className={classes.underlineImage}/>
        <Typography variant="body1">
          Jasonslandscaping@bell.net
          <br />
          (613) 229-9977
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;