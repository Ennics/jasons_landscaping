// Services.js
import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import {Typography, Box } from '@material-ui/core'; 
import useScrollToTop from '../useScrollToTop';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import InfoCard from '../InfoCard';
import sitePrepImg from '../../components/images/site_prep.jpeg'
import demolitionImg from '../../components/images/demolition.jpeg'
import septicImg from '../../components/images/septic_system.jpeg'
import roadConstructionImg from '../../components/images/road_construction.jpeg'
import flatbedImg from '../../components/images/flatbed_img.jpeg'

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
      transform: 'translateY(-5px)',
    },
  },
  buttonContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '2px solid white',
  },
  arrowIcon: {
    color: 'white',
  },
  titleBox: {
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  headerSpace: {
    width: '50%',
    margin: '0 auto',
    display: 'inline-block',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
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
    fontSize: '18px',
    textAlign: 'center',
  },
  horizontalLine: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    width: '80%', 
    height: '20px',
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
              Our Services
            </Typography>
            <Typography variant="body1" className={classes.headerDescription}>
            At Jason's Landscaping, we take pride in transforming outdoor spaces into beautiful 
            and functional areas that meet our clients' needs and exceed their expectations. 
            With over 25 years of experience in the industry, we offer a range of landscape construction 
            services, from site preparation and demolition to septic systems and road construction. 
            Our team is committed to delivering personalized service and attention to detail to 
            ensure that every project is completed to the highest standard.
            </Typography>
          </Box>
        </div>
        <img src="/horizontal_line.png" alt="line" className={classes.horizontalLine}/>
        <div>
          <InfoCard
            title="Site Prep"
            description="Our site preparation services involve clearing and grading land to prepare 
            it for construction or other development. This process typically includes removing trees, 
            rocks, and other debris, as well as leveling the ground to ensure a stable foundation for 
            the project."
            image={sitePrepImg}
            link="/services/site-prep"
            imageOnRight={true}
          />
          <InfoCard
            title="Demolition"
            description="We offer comprehensive demolition services to help our clients safely and 
            efficiently remove unwanted structures and objects. Our team is equipped with the tools 
            and expertise to handle projects of many sizes."
            image={demolitionImg}
            link="/services/demolition"
            imageOnRight={false}
          />
          <InfoCard
            title="Septic Systems"
            description="At Jason's Landscaping, we provide expert septic system services to ensure the 
            proper functioning of your property's wastewater management system. Our team is experienced 
            in all aspects of septic system design, installation, repair, and maintenance to ensure that 
            your system operates safely and efficiently."
            image={septicImg}
            link="/services/septic-systems"
            imageOnRight={true}
          />
          <InfoCard
            title="Flatbed and Towing"
            description="At Jason's Landscaping, we offer reliable flatbed and towing services to assist with 
            the transportation of heavy equipment, vehicles, and other materials. Our team is equipped with 
            state-of-the-art equipment and experienced operators to ensure the safe and efficient transport of 
            your property."
            image={flatbedImg}
            link="/services/flatbed-and-towing"
            imageOnRight={false}
          />
          <InfoCard
            title="Road Construction"
            description="We offer professional road construction services to help our clients create safe and 
            functional roadways. Our team has the expertise and equipment necessary to handle all aspects of 
            road construction, from excavation and grading to paving and striping."
            image={roadConstructionImg}
            link="/services/road-construction"
            imageOnRight={true}
          />
        </div>
        <Footer/>
    </div>
  );
};

export default Services;