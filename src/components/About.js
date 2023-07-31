// About.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';

const theme = createTheme({});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem",
    color: "#800000"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
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
    fontSize: "2.5vw",
    fontFamily: 'Georgia',
    marginTop: "-5vw",
    fontWeight: "bold"
  },
  boldWord: {
    fontWeight: "bold"
  },
  box:{
    display: "flex",
    alignItems: "center"
  },
  arrowAnimation: {
    position: 'absolute',
    bottom: theme.spacing(4), // Adjust the distance from the bottom as needed
    left: '50%',
    transform: 'translateX(-50%)',
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
})

const About = () => {
  const classes = styles(); 
  useScrollToTop();
  return (
    <div>
        <NavBar/>
        <div>
          <img src="about_page_cover.png" width="100%" alt="hero"/>
          <div className={classes.overlay}>
            ABOUT US
          </div>
          <div className={classes.arrowAnimation}>
            {/* Replace the following with your arrow icon component */}
            {/* <YourArrowIconComponent /> */}
            <div className={classes.buttonContainer}>
              <ArrowDownwardIcon className={classes.arrowIcon} />
            </div>
          </div>
        </div>
        <h1>About Us</h1>
        <p>This is the About Us page content.</p>
        <Footer/>
    </div>
  );
};

export default About;