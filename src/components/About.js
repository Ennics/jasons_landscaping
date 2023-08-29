// About.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import InfoCard from './InfoCard';
import aboutImage from '../components/images/who_we_are_img.jpeg'

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
      <div id="first-section">
        <InfoCard
          subtitle="About Us"
          title="Who We Are"
          description="Jason's Landscaping, a reputable name in the industry for over 25 years, is your trusted partner for all landscaping needs. With a deep-rooted commitment to quality and craftsmanship, we take pride in transforming outdoor spaces into captivating havens. Our extensive experience spans a quarter of a century, during which we've honed our expertise in various landscaping services.

          At Jason's Landscaping, we're dedicated to the artistry of designing and maintaining outdoor environments that reflect both beauty and functionality. Our passion for sustainable practices drives us to create landscapes that harmonize with nature, enhancing the aesthetic appeal of homes and commercial spaces alike. With a keen focus on customer satisfaction, our knowledgeable team collaborates closely with clients, ensuring that every vision becomes a reality.
          
          As a Better Business Bureau accredited business, we uphold the highest standards of professionalism and integrity. Our skilled professionals, licensed and insured, bring years of experience to each project, guaranteeing exceptional results. From lush gardens and vibrant lawns to innovative hardscapes, we're committed to crafting landscapes that stand the test of time. Discover the difference that decades of dedication make with Jason's Landscaping."
          image={aboutImage}
          link="/about"
          imageOnRight={true}
          hideButton={true}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default About;