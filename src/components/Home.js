import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core'; 
import NavBar from './NavBar'
import InfoCard from './InfoCard';
import Footer from './Footer'
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
      marginTop: "-5vw"
    },
    boldWord: {
      fontWeight: "bold"
    },
    box:{
      display: "flex",
      alignItems: "center"
    }
})

function Home() {
    useScrollToTop();
    const classes = styles(); 
    return (
        <div>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <div>
                    <img src="cover_img_2.png" width="100%" alt="hero"/>
                    <Fade in={true} timeout={2000}>
                        <div>
                            <div className={classes.overlay}>
                               For All Your Landscape Construction Needs, <span className={classes.boldWord}>We've Got You Covered.</span>
                            </div>
                        </div>
                    </Fade>
                </div> 
                <div className={classes.wrapper}>
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