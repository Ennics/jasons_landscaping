import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import {Typography, Box} from '@material-ui/core'; 
import NavBar from './NavBar'
import InfoCard from './InfoCard';
import Footer from './Footer'
import Navigation from './Navigation';
import ReviewSection from './ReviewSection';
import useScrollToTop from './useScrollToTop';
import Fade from '@material-ui/core/Fade';
import aboutImage from '../components/images/who_we_are_img.jpeg'
import whatWeDoImage from '../components/images/what_we_do_img_2.jpeg'
import theMaterials from '../components/images/the_materials_img.jpeg'
import workWithUs from '../components/images/work_with_us_img.jpg'

const theme = createTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });
  
  const styles = makeStyles({
    wrapper: {
      width: "80%",
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
      fontSize: "2rem",
      fontFamily: 'Georgia',
      marginTop: "-5vw"
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
      backgroundImage: `url('cover_img_2.png')`,
      backgroundSize: 'cover', /* Maintain image proportions and cover the container */
      backgroundPosition: 'center center', /* Center the image */
    },
})
// <img src="cover_img_2.png" width="100%" alt="hero"/> <NavBar/>
function Home() {
    useScrollToTop();
    function scrollToFirstSection() {
      const firstSectionOffsetTop = document.getElementById('first-section').offsetTop;
      window.scrollTo({
        top: firstSectionOffsetTop,
        behavior: 'smooth',
      });
    }
    const classes = styles(); 
    return (
        <div>
          <NavBar/>
            <ThemeProvider theme={theme}>
                <div>
                    <div className={classes.coverImageContainer}>
                      <Fade in={true} timeout={2000}>
                          <div>
                              <div className={classes.overlay}>
                                <div>
                                  Proudly Serving The Ottawa Valley Area For
                                </div>
                                <div className={classes.boldWord}>
                                  Over 25 Years.
                                </div>
                                <div className={classes.arrowAnimation}>
                                  <div className={classes.buttonContainer}>
                                    <ArrowDownwardIcon onClick={scrollToFirstSection} className={classes.arrowIcon} />
                                  </div>
                                </div>
                              </div>
                          </div>
                      </Fade>
                    </div>
                </div> 
                <div id="first-section" className={classes.wrapper}>
                    <Typography variant="h4" className={classes.bigSpace}>
                        Your Trusted Partner in Construction and Landscaping Services 
                    </Typography>
                    <Typography variant="h6" className={classes.littleSpace}>
                      With over 25 years of experience, Jason's Landscaping has been proudly serving the Ottawa Valley 
                      community with unparalleled expertise in a wide range of construction and landscaping services. As a 
                      family-owned company, our dedication to quality workmanship and customer satisfaction has earned us a reputation 
                      as a reliable partner in the industry. From landscaping and site preparation to demolition, septic 
                      systems, road construction, flatbed, and towing services, we take pride in delivering top-notch 
                      solutions tailored to meet your unique needs.
                    </Typography>
                    <Typography variant="h6" className={classes.littleSpace} color="maroon">
                      Our team of skilled professionals is committed to 
                      bringing your vision to life and transforming your projects into reality.
                    </Typography>
                </div>
                <ReviewSection />
                <div>
                  <InfoCard
                    subtitle="About Us"
                    title="Who We Are"
                    description="For the past 25 years, we have earned the trust of municipalities 
                                and private developers across the Ottawa Valley."
                    image={aboutImage}
                    link="/about"
                    imageOnRight={true}
                  />
                  <InfoCard
                    subtitle="Services"
                    title="What We Do"
                    description="Whether it's enhancing outdoor spaces or creating captivating 
                    commercial landscapes, our skilled team strives to exceed expectations, bringing nature's 
                    allure to life with every project we undertake."
                    image={whatWeDoImage}
                    link="/services"
                    imageOnRight={false}
                  />
                  <InfoCard
                    subtitle="Products"
                    title="The Materials You Need"
                    description="With our comprehensive range of landscaping products, we aim to help you achieve 
                    your dream outdoor oasis with ease and excellence."
                    image={theMaterials}
                    link="/products"
                    imageOnRight={true}
                  />
                  <InfoCard
                    subtitle="Careers"
                    title="Work With Us"
                    description="Join us in shaping beautiful outdoor spaces and making a positive impact on the communities 
                    we serve. Discover a fulfilling career path at Jason's Landscaping today."
                    image={workWithUs}
                    link="/careers"
                    imageOnRight={false}
                  />
                </div>
                <div className={classes.bigSpace}>
                    <Footer/>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Home;