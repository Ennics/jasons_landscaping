// About.js
import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Box, Button } from '@material-ui/core'; 
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
  coverImageContainer: {
    position: 'relative',
    height: '870px',
    overflow: 'hidden',

    backgroundImage: `url('/about_hero.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  servicesBrief: {
    color: '#000000',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  section: {
    margin: theme.spacing(4),
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  title: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    maxWidth: '300px',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },
  excavator_icon: {
    marginTop: theme.spacing(-1.5),
    position: "relative",
    display: "inline-block",
    width: '60px',
    height: '55px'
  },
  septic_icon: {
    marginTop: theme.spacing(-1.5),
    position: "relative",
    display: "inline-block",
    width: '60px',
    height: '55px'
  },
  flatbed_icon: {
    marginTop: theme.spacing(-1.5),
    position: 'relative',
    display: "inline-block",
    width: '70px',
    height: '50px'
  },
  staticBackground: {
    display: 'flex',
    backgroundImage: 'url("careers_bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '500px',
    position: 'relative',
    justifyContent: 'center'
  },
  careersButton: {
    fontSize: '0.8rem',
    color: 'white',
    backgroundColor: 'maroon',
    border: '2px solid maroon',
    width: "125px",
    justifyContent: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white',
    }
  },
  careersSection: {
    color: '#ffffff',
    padding: theme.spacing(4),
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  careersTitle: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px',
    },
  },
  careersDescription: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    maxWidth: '500px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  whyChoseUsSection: {
    color: '#000000',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  whyChoseUsHeader: {
    marginTop: theme.spacing(4),
    width: '600px',
    margin: '0 auto',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  },
  whyChoseUsTitle: {
    fontSize: '26px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'maroon'
  },
  whyChoseUsDescription: {
    color: '#545454',
    fontSize: '16px',
    textAlign: 'center',
  },
  reasonsSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  reasonBox: {
    width: '200px',
    margin: '0 auto',
    display: 'inline-block',
    justifyContent: 'center',
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1),
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: '0 auto'
    },
  },
  centerBox: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  attributeDescription: {
    color: '#545454',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },
  check_icon: {
    marginTop: theme.spacing(-1.5),
    display: "flex",
    margin: '0 auto',
    width: '50px',
    height: '40px'
  },
  horizontalLine: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    width: '80%', 
    height: '20px',
    marginTop: theme.spacing(4)
  }
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
      <img src="/horizontal_line.png" alt="line" className={classes.horizontalLine}/>
      <div id="services-brief" className={classes.servicesBrief}>
        <Box className={classes.section}>
          <Link to="/services/site-prep">
            <img src="/excavator_icon.png" alt="underline" className={classes.excavator_icon}/>
          </Link>
          <Typography variant="h6" className={classes.title}>
            LANDSCAPING
          </Typography>
          <Typography variant="body1" className={classes.description}>
            We offer general landscaping services tailored to fit your specific needs.
          </Typography>
        </Box>

        <Box className={classes.section}>
          <Link to="/services/septic-systems">
            <img src="/septic_logo.png" alt="underline" className={classes.septic_icon}/>
          </Link>
          <Typography variant="h6" className={classes.title}>
            SEPTIC SYSTEMS
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Need a septic system installed? Look no further, we will accommodate your specific requirements.
          </Typography>
        </Box>

        <Box className={classes.section}>
          <Link to="/services/flatbed-and-towing">
            <img src="/flatbed_icon.png" alt="underline" className={classes.flatbed_icon}/>
          </Link>
          <Typography variant="h6" className={classes.title}>
            TOWING & FLATBED
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Jason's Landscaping also provides flatbed and towing services to cater to all your transportation needs.
          </Typography>
        </Box>
      </div>
      <div className={classes.staticBackground}>
        <Box className={classes.careersSection}>
          <Typography variant="h6" className={classes.careersTitle}>
            WORK WITH US
          </Typography>
          <Typography variant="body1" className={classes.careersDescription}>
            Join our dynamic team at Jason's Landscaping and embark on a journey to transform your comunity. 
            We offer exciting opportunities for career development where you'll work with 
            state-of-the-art equipment, and collaborate with experts who are dedicated to excellence in every project.
          </Typography>
          <Button component={Link} to="/careers" variant="contained" className={classes.careersButton}>
            Careers
          </Button>
        </Box>
      </div>
      <div className={classes.whyChoseUsSection}>
        <Box className={classes.whyChoseUsHeader}>
          <Typography variant="h6" className={classes.whyChoseUsTitle}>
            Why Choose Jason's Landscaping
          </Typography>
          <Typography variant="body1" className={classes.whyChoseUsDescription}>
            We are more than just a company; we are a community of dedicated professionals at Jason's Landscaping, 
            where our core values drive our commitment to sustainability, teamwork, and excellence.
          </Typography>
        </Box>
        <div className={classes.reasonsSection}>
          <Box className={classes.reasonBox}>
            <img src="/checkmark_pic.png" alt="underline" className={classes.check_icon}/>
            <Typography variant="h6" className={classes.whyChoseUsTitle}>
              Expertise
            </Typography>
            <Typography variant="body1" className={classes.attributeDescription}>
              At Jason's Landscaping, we take pride in our 25 years of experience in the landscaping and construction 
              industry. Joining our team means becoming a part of a company with a rich history of delivering exceptional 
              results.
            </Typography>
          </Box>
          <Box className={classes.reasonBox}>
            <img src="/checkmark_pic.png" alt="underline" className={classes.check_icon}/>
            <Typography variant="h6" className={classes.whyChoseUsTitle}>
              Sustainability
            </Typography>
            <Typography variant="body1" className={classes.attributeDescription}>
              We are dedicated to sustainable landscaping and construction practices. Our commitment to eco-friendly 
              methods ensures that your work contributes to a greener and more sustainable future for our communities.
            </Typography>
          </Box>
          <Box className={classes.reasonBox}>
            <img src="/checkmark_pic.png" alt="underline" className={classes.check_icon}/>
            <Typography variant="h6" className={classes.whyChoseUsTitle}>
              Community
            </Typography>
            <Typography variant="body1" className={classes.attributeDescription}>
              Our team is our most valuable asset. We foster a culture of care and collaboration, where every team 
              member's voice is heard and valued. When you join us, you'll be part of a close-knit group of experienced 
              professionals.
            </Typography>
          </Box>
          <Box className={classes.reasonBox}>
            <img src="/checkmark_pic.png" alt="underline" className={classes.check_icon}/>
            <Typography variant="h6" className={classes.whyChoseUsTitle}>
              Trust
            </Typography>
            <Typography variant="body1" className={classes.attributeDescription}>
              Jason's Landscaping is a Better Business Bureau (BBB) accredited business. This accreditation reflects our 
              commitment to honesty, integrity, and exceptional service.
            </Typography>
          </Box>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;