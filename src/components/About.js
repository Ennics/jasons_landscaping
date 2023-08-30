// About.js
import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Box} from '@material-ui/core'; 
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import InfoCard from './InfoCard';
import aboutImage from '../components/images/office_pic.png'

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
  servicesBrief: {
    color: '#000000', // Text color
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
  underlineImage: {
    marginTop: theme.spacing(-3),
    position: "relative",
    display: "inline-block",
    width: '25px', // Adjust the width of the underline as needed
    height: '30px'
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
      <div id="first-section">
        <InfoCard
          subtitle="About Us"
          title="A Reputable Name In The Industry For Over 25 Years"
          description="At Jason's Landscaping, we're dedicated to the artistry of designing and maintaining outdoor 
          environments that reflect both beauty and functionality. Our passion for sustainable practices 
          drives us to create landscapes that harmonize with nature, enhancing the aesthetic appeal of 
          homes and commercial spaces alike. With a keen focus on customer satisfaction, our knowledgeable 
          team collaborates closely with clients, ensuring that every vision becomes a reality."
          image={aboutImage}
          link="/about"
          imageOnRight={true}
          hideButton={true}
        />
      </div>
      <div id="services-brief" className={classes.servicesBrief}>
        {/* First Section */}
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            LANDSCAPING
          </Typography>
          <img src="red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Typography variant="body1" className={classes.description}>
            Your local construction company, proudly serving the Ottawa Valley community since 1998.
          </Typography>
        </Box>

        {/* Second Section */}
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            SEPTIC SYSTEMS
          </Typography>
          <img src="red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Typography variant="body1" className={classes.description}>
            Your local construction company, proudly serving the Ottawa Valley community since 1998.
          </Typography>
        </Box>

        {/* Third Section */}
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            TOWING & FLATBED
          </Typography>
          <img src="red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Typography variant="body1" className={classes.description}>
            Your local construction company, proudly serving the Ottawa Valley community since 1998.
          </Typography>
        </Box>
      </div>
      <Footer/>
    </div>
  );
};

export default About;