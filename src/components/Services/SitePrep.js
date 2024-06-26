// SitePrep.js
import React from 'react';
import NavBar from '../NavBar'
import Footer from '../Footer'
import useScrollToTop from '../useScrollToTop';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import InfoCard from '../InfoCard';
import sitePrepImg from '../../components/images/siteprep_img.jpeg'
import {Typography, Button, Link } from '@material-ui/core'; 
import { useNavigate } from 'react-router-dom';

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
  quoteSection: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  quoteButton: {
    marginTop: theme.spacing(2),
    backgroundColor: 'maroon'
  },
  quoteSectionText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }
}));

const SitePrep = () => {
  useScrollToTop();

  const classes = useStyles();
  const navigate = useNavigate();

  function scrollToFirstSection() {
    const firstSectionOffsetTop = document.getElementById('first-section').offsetTop;
    window.scrollTo({
      top: firstSectionOffsetTop,
      behavior: 'smooth',
    });
  }

  function handleClick() {
    navigate('/contact');
  }

  return (
    <div>
        <NavBar/>
        <div className={classes.coverImageContainer}/>
        <Fade in={true} timeout={2000}>
          <div>
            <div className={classes.overlay}>
              <div className={classes.boldWord}>
                SITE PREP
              </div>
              <div className={classes.arrowAnimation}>
                <div className={classes.buttonContainer}>
                  <ArrowDownwardIcon onClick={scrollToFirstSection} className={classes.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <InfoCard
          title="Leveling the Field"
          subtitle="Site Prep"
          description="At Jason's Landscaping, our dedicated team excels in clearing land, trees, 
          rocks, and debris to create a clean canvas for your project. Going beyond basic clearance, we emphasize precise grading, 
          leveling the ground to establish a stable foundation essential for structural integrity. We ensure efficiency and accuracy 
          in every aspect of site preparation. Whether creating a 
          building pad or road, we take pride in delivering services that set the stage for seamless project progression."
          image={sitePrepImg}
          link="/services/site-prep"
          imageOnRight={true}
          hideButton={true}
        />
        <img src="/horizontal_line.png" alt="line" className={classes.horizontalLine}/>
        <div className={classes.quoteSection} id="first-section">
          <Typography variant="h5" className={classes.quoteSectionText}>
            Request a Quote Today!
          </Typography>
          <Button
            component={Link}
            onClick={handleClick}
            variant="contained"
            color="primary"
            className={classes.quoteButton}
          >
            Contact Us
          </Button>
        </div>
        <Footer/>
    </div>
  );
};

export default SitePrep;