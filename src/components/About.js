// About.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';

const theme = createTheme({});

const styles = makeStyles({
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
    fontFamily: 'Georgia',
    marginTop: "-5vw"
  },
  boldWord: {
    fontWeight: "bold"
  },
  box:{
    display: "flex",
    alignItems: "center"
  },
  arrowAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "1rem",
    // top: "50%",
    // left: "50%", 
    // transform: "translate(-50%, -50%)", 
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
  coverImageContainer: {
    position: 'relative',
    height: '870px', /* Set your desired constant height */
    overflow: 'hidden', /* Hide any overflow */

    /* Set the background image */
    backgroundImage: `url('about_page_cover.png')`,
    backgroundSize: 'cover', /* Maintain image proportions and cover the container */
    backgroundPosition: 'center center', /* Center the image */
  },
})

const About = () => {
  const classes = styles(); 
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
              ABOUT US
            </div>
            <div className={classes.arrowAnimation}>
              <div className={classes.buttonContainer}>
                <ArrowDownwardIcon onClick={scrollToFirstSection} className={classes.arrowIcon} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Footer/>
    </div>
  );
};

export default About;