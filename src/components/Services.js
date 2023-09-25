// Services.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import {Link} from 'react-router-dom';
import {Typography, Box, Button } from '@material-ui/core'; 
import useScrollToTop from './useScrollToTop';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  coverImageContainer: {
    position: 'relative',
    height: '870px',
    overflow: 'hidden', 
    backgroundImage: `url('/services_cover.png')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center', 
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    padding: "20", 
    color: "white", 
    textAlign: "center",
    width: "50%",
    fontSize: "2rem",
    fontFamily: 'Roboto',
    marginTop: "-5vw"
  },
  boldWord: {
    fontWeight: "bold",
    fontFamily: 'Georgia'
  },
  box:{
    display: "flex",
    alignItems: "center"
  },
  arrowAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "1rem",
    animation: '$raindrop 2s infinite',
  },
  '@keyframes raindrop': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-5px)', // Adjust the raindrop effect height as needed
    },
  },
  buttonContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px', // Adjust the width as needed to fit the circle
    height: '32px', // Adjust the height as needed to fit the circle
    borderRadius: '50%',
    border: '2px solid white',
  },
  arrowIcon: {
    color: 'white', // Set the icon color to white
  },
  titleBox: {
    padding: theme.spacing(4), // Ample room around the content
    display: 'flex',
    justifyContent: 'center', // Center the sections horizontally
  },
  headerSpace: {
    width: '600px',
    margin: '0 auto',
    display: 'inline-block',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '300px', // If screen is small, stack the footer content
    },
  },
  headerTitle: {
    fontSize: '26px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'maroon'
  },
  headerDescription: {
    color: '#545454',
    fontSize: '16px',
    textAlign: 'center',
  },
  horizontalLine: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',       // Center the image horizontally
    width: '80%', 
    height: '20px',
    marginTop: theme.spacing(4)
  }
}));

const Services = () => {
  const classes = useStyles();
  useScrollToTop();
  function scrollToFirstSection() {
    const firstSectionOffsetTop = document.getElementById('first-section').offsetTop;
    window.scrollTo({
      top: firstSectionOffsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <div>
        <NavBar/>
        <div className={classes.coverImageContainer}/>
        <Fade in={true} timeout={2000}>
          <div>
            <div className={classes.overlay}>
              <div className={classes.boldWord}>
                SERVICES
              </div>
              <div className={classes.arrowAnimation}>
                <div className={classes.buttonContainer}>
                  <ArrowDownwardIcon onClick={scrollToFirstSection} className={classes.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div className={classes.titleBox}>
          <Box className={classes.headerSpace} id='first-section'>
            <Typography variant="h6" className={classes.headerTitle}>
              Why Chose Jason's Landscaping
            </Typography>
            <Typography variant="body1" className={classes.headerDescription}>
              We are more than just a company; we are a community of dedicated professionals at Jason's Landscaping, 
              where our core values drive our commitment to sustainability, teamwork, and excellence.
            </Typography>
          </Box>
        </div>
          <img src="/horizontal_line.png" alt="line" className={classes.horizontalLine}/>
        <Footer/>
    </div>
  );
};

export default Services;