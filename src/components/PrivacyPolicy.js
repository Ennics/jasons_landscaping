// PrivacyPolicy.js
import React from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import {Typography, Button, Link } from '@material-ui/core'; 

const useStyles = makeStyles((theme) => ({
  coverImageContainer: {
    position: 'relative',
    height: '870px',
    overflow: 'hidden', 
    backgroundImage: `url('/site_prep.jpeg')`,
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
  horizontalLine: {
    position: 'relative',
    display: 'flex',
    margin: '0 auto',
    width: '80%', 
    height: '20px',
  },
  policyText: {
    maxWidth: '800px',
    margin: 'auto',
    padding: theme.spacing(4),
    lineHeight: '1.6',
    textAlign: 'left',
    fontFamily: 'Roboto',
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
    marginTop: '50px',
  },
  boldText: {
    fontWeight: 'bold',
  },
  underline: {
    textDecoration: 'underline',
  },
}));

const PrivacyPolicy = () => {
  useScrollToTop();
  const classes = useStyles();

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
                PRIVACY POLICY
              </div>
              <div className={classes.arrowAnimation}>
                <div className={classes.buttonContainer}>
                  <ArrowDownwardIcon onClick={scrollToFirstSection} className={classes.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div className={classes.policyText} id="first-section">
            <Typography paragraph>
            This privacy notice discloses the privacy practices for <span className={classes.underline}>www.jasonsconstruction.ca</span>. This privacy notice 
            applies solely to information collected by this website. It will notify you of the following:
            </Typography>
            <Typography paragraph className={classes.bold}>
            Information Collection, Use, and Sharing
            </Typography>
            <Typography paragraph>
            We only collect information that you voluntarily give us via email, contact forms, or other direct contact from you. We will not sell or rent 
            this information to anyone.
            </Typography>
            <Typography paragraph>
            We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party 
            outside of our organization, other than as necessary to fulfill your request, such as responding to inquiries or providing requested services.
            </Typography>
            <Typography paragraph>
            Unless you ask us not to, we may contact you via email in the future to inform you about specials, new products or services, or changes to 
            this privacy policy.
            </Typography>
            <Typography paragraph className={classes.bold}>
            Your Access to and Control Over Information
            </Typography>
            <Typography paragraph>
            You have the right to:
            </Typography>
            <Typography paragraph>
            <span className={classes.boldText}>Access: </span>See what data we have about you, if any.
            </Typography>
            <Typography paragraph>
            <span className={classes.boldText}>Correction: </span>Correction: Change/correct any data we have about you.
            </Typography>
            <Typography paragraph>
            <span className={classes.boldText}>Deletion: </span>Have us delete any data we have about you.
            </Typography>
            <Typography paragraph>
            <span className={classes.boldText}>Concerns: </span>Express any concern you have about our use of your data.
            </Typography>
            <Typography paragraph>
            You may opt out of any future contacts from us at any time. You can do so by contacting us via the email address or phone number 
            provided on our website.
            </Typography>
            <Typography paragraph className={classes.bold}>
            Security
            </Typography>
            <Typography paragraph>
            We take precautions to protect your information. When you submit sensitive information via the website, your information is protected 
            both online and offline.
            </Typography>
            <Typography paragraph>
            Only employees who need the information to perform specific jobs (e.g., billing or customer service) are granted access to personally 
            identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
            </Typography>
            <Typography paragraph className={classes.bold}>
            Contact Information
            </Typography>
            <Typography paragraph>
            If you feel that we are not abiding by this privacy policy, please contact us immediately via telephone or email provided on our website.
            </Typography>

        </div>
        <Footer/>
    </div>
  );
};

export default PrivacyPolicy;