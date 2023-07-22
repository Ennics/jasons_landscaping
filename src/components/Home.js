import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core'; 
import NavBar from './NavBar'
import InfoCard from './InfoCard';
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import Fade from '@material-ui/core/Fade';
import aboutImage from '../components/images/j_and_s_logo.png'

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
                <div>
                  <InfoCard
                    subtitle="About Us"
                    title="Who We Are"
                    description="For the past 25 years, we have earned the trust of municipalities 
                                and private developers in the region as their reliable partner."
                    image={aboutImage}
                    link="/about"
                    imageOnRight={true}
                  />
                  <InfoCard
                    subtitle="Services"
                    title="What We Do"
                    description="For the past 25 years, we have earned the trust of municipalities 
                                and private developers in the region as their reliable partner."
                    image={aboutImage}
                    link="/services"
                    imageOnRight={false}
                  />
                  <InfoCard
                    subtitle="Products"
                    title="The Materials You Need"
                    description="For the past 25 years, we have earned the trust of municipalities 
                                and private developers in the region as their reliable partner."
                    image={aboutImage}
                    link="/products"
                    imageOnRight={true}
                  />
                  <InfoCard
                    subtitle="Careers"
                    title="Work With Us"
                    description="For the past 25 years, we have earned the trust of municipalities 
                                and private developers in the region as their reliable partner."
                    image={aboutImage}
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