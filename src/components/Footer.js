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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // If screen is small, stack the footer content
    },
  },
  section: {
    margin: theme.spacing(4), // Space between sections
    textAlign: 'left', // Center the content within each section
  },
  title: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '16px', // Replace with the desired font size
    fontWeight: 'bold', // Replace with the desired font weight
    marginBottom: theme.spacing(1), // Space between title and description
  },
  description: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '16px', // Replace with the desired font size
    maxWidth: '300px', // Limit the width of the description box
  },
  link: {
    color: '#ffffff', // Black color for the links
    textDecoration: 'none', // Remove underline
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '18px', // Replace with the desired font size
    margin: theme.spacing(1), // Space between each link
    "&:hover": {
      color: "orange",
  },
  },
  footerText: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    marginTop: theme.spacing(0), // Space between links and footer text
    fontSize: '12px', // Replace with the desired font size

  },
  footerText2: {
    marginTop: theme.spacing(-3), // Space between links and footer text
    fontSize: '14px', // Replace with the desired font size
    color: '#ffffff',
    textAlign: "center",
    justifyContent: 'center', // Center the sections horizontally
  },
  underlineImage: {
    marginTop: theme.spacing(-3),
    position: "relative",
    display: "inline-block",
    width: '25px', // Adjust the width of the underline as needed
    height: '30px'
  },
  bulletPoint: {
    marginTop: theme.spacing(-3),
    marginRight: theme.spacing(-0.5),
    position: "relative",
    display: "inline-block",
    width: '7px', // Adjust the width of the underline as needed
    height: '12px'
  },
  bbbLogo: {
    marginRight: theme.spacing(-0.5),
    position: "relative",
    display: "inline-block",
    width: '125px', // Adjust the width of the underline as needed
    height: '60px'
  },
  stack: {
    display: "flex",
    flexDirection: "row"
  },
  bbbLink: {
    textDecoration: "none",
  },
  horizontalLine: {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 0,
    width: '100%',
    maxWidth: 1200, // Set your desired max width
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Faint horizontal line color
  },
}));

const Footer = () => {
  const classes = useStyles();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <footer className={classes.footer}>
        {/* First Section */}
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            OUR COMPANY
          </Typography>
          <img src="/red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Typography variant="body1" className={classes.description}>
            Your local construction company, proudly serving the Ottawa Valley community since 1998.
          </Typography>
        </Box>

        {/* Second Section */}
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            HELPFUL LINKS
          </Typography>
          <img src="/red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/about" className={classes.link}>
                <Typography component="span">
                    About Us
                </Typography>
            </Link>
          </Box>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/careers" className={classes.link}>
                <Typography component="span">
                    Careers
                </Typography>
            </Link>
          </Box>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/contact" className={classes.link}>
                <Typography component="span">
                    Contact
                </Typography>
            </Link>
          </Box>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/privacy-policy" className={classes.link}>
                <Typography component="span">
                    Privacy Policy
                </Typography>
            </Link>
          </Box>
        </Box>

        {/* Third Section */}
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            CONTACT INFO
          </Typography>
          <img src="/red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Typography variant="body1">
            Jasonslandscaping@bell.net
            <br />
            (613) 229-9977
          </Typography>
          <div className={classes.stack}>
            <IconButton
              component="a"
              href="https://www.facebook.com/jasonslandscapingandsnowplowing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon style={{ color: '#fff' }} />
            </IconButton>
            <Link to="https://www.bbb.org/ca/on/stittsville/profile/landscape-contractors/jasons-landscaping-and-snowplowing-inc-0117-3855" className={classes.bbbLink}>
              <img src="/bbb_logo.png" alt="BBB Acredited" className={classes.bbbLogo}/>
            </Link>
          </div>
        </Box>
      </footer>
      <Typography variant="body2" className={classes.footerText2}>
        &copy; {getCurrentYear()} Jason's Landscaping and Snowplowing Inc.
      </Typography>
    </div>
  );
};

export default Footer;