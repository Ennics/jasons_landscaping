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
import aboutImage from '../components/images/office_pic.png' //#601C1E

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
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center', // If screen is small, stack the footer content
    },
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
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block', // If screen is small, stack the footer content
    },
  },
  excavator_icon: {
    marginTop: theme.spacing(-1.5),
    position: "relative",
    display: "inline-block",
    width: '60px', // Adjust the width of the underline as needed
    height: '55px'
  },
  septic_icon: {
    marginTop: theme.spacing(-1.5),
    position: "relative",
    display: "inline-block",
    width: '60px', // Adjust the width of the underline as needed
    height: '55px'
  },
  flatbed_icon: {
    marginTop: theme.spacing(-1.5),
    position: 'relative',
    display: "inline-block",
    // margin: '0 auto',
    width: '70px', // Adjust the width of the underline as needed
    height: '50px'
  },
  staticBackground: {
    display: 'flex',
    backgroundImage: 'url("careers_bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '500px', // Adjust as needed
    position: 'relative',
    justifyContent: 'center'
  },
  careersButton: {
    fontSize: '0.8rem', // Set the font size to make the button smaller
    color: 'white', // Set the text color to maroon
    backgroundColor: 'maroon', // Make the background transparent
    border: '2px solid maroon', // Add a border around the button
    width: "125px",
    justifyContent: "center",
    borderRadius: theme.spacing(1), // Add border radius for a rounded look
    padding: theme.spacing(1, 2), // Add padding to the button
    marginTop: theme.spacing(2),
    transition: 'background-color 0.2s ease-in-out', // Add a smooth transition on hover
    '&:hover': {
      backgroundColor: 'transparent', // Change the background color on hover
      color: 'white', // Change the text color on hover
    }
  },
  careersSection: {
    color: '#ffffff', // Text color
    padding: theme.spacing(4), // Ample room around the content
    width: '50%',
    display: 'flex',
    justifyContent: 'center', // Center the sections horizontally
    flexDirection: 'column', // Arrange sections horizontally
  },
  careersTitle: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '32px', // Replace with the desired font size
    fontWeight: 'bold', // Replace with the desired font weight
    marginBottom: theme.spacing(1), // Space between title and description
    [theme.breakpoints.down('sm')]: {
      fontSize: '26px', // If screen is small, stack the footer content
    },
  },
  careersDescription: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '18px', // Replace with the desired font size
    maxWidth: '500px', // Limit the width of the description box
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px', // If screen is small, stack the footer content
    },
  },
  whyChoseUsSection: {
    color: '#000000', // Text color
    padding: theme.spacing(4), // Ample room around the content
    display: 'flex',
    justifyContent: 'center', // Center the sections horizontally
    flexDirection: 'column', // Arrange sections vertically
  },
  whyChoseUsHeader: {
    marginTop: theme.spacing(4),
    width: '600px',
    margin: '0 auto',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      width: '300px', // If screen is small, stack the footer content
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
      flexDirection: 'column', // If screen is small, stack the footer content
    },
  },
  reasonBox: {
    width: '200px',
    margin: '0 auto',
    display: 'inline-block',
    justifyContent: 'center',
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1),
    padding: theme.spacing(4), // Ample room around the content
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center', // If screen is small, stack the footer content
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
      display: 'inline-block', // If screen is small, stack the footer content
    },
  },
  check_icon: {
    marginTop: theme.spacing(-1.5),
    display: "flex",
    margin: '0 auto',
    width: '50px', // Adjust the width of the underline as needed
    height: '40px'
  },
  horizontalLine: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',       // Center the image horizontally
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
        {/* First Section */}
        <Box className={classes.section}>
          <img src="/excavator_icon.png" alt="underline" className={classes.excavator_icon}/>
          <Typography variant="h6" className={classes.title}>
            LANDSCAPING
          </Typography>
          <Typography variant="body1" className={classes.description}>
            We offer general landscaping services tailored to fit your specific needs.
          </Typography>
        </Box>

        {/* Second Section */}
        <Box className={classes.section}>
          <img src="/septic_logo.png" alt="underline" className={classes.septic_icon}/>
          <Typography variant="h6" className={classes.title}>
            SEPTIC SYSTEMS
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Need a septic system installed? Look no further, we will accommodate your specific requirements.
          </Typography>
        </Box>

        {/* Third Section */}
        <Box className={classes.section}>
          <img src="/flatbed_icon.png" alt="underline" className={classes.flatbed_icon}/>
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
            Why Chose Jason's Landscaping
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