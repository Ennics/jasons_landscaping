// Depot.js
import React, { useRef, useEffect } from 'react';
import NavBar from './NavBar'
import Footer from './Footer';
import useScrollToTop from './useScrollToTop';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, Button, Link } from '@material-ui/core'; 
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import InfoCard from './InfoCard';
import topSoilImage from './images/top_soil_img.png'
import interlockImage from './images/interlock_img.jpeg'
import retainingWallsImage from './images/retaining_walls_img.jpeg'
import aggregatesImage from './images/aggregates_img.jpeg'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  coverImageContainer: {
    position: 'relative',
    height: '870px',
    overflow: 'hidden', 
    backgroundImage: `url('/depot_cover_img.jpeg')`,
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
  titleBox: {
    padding: theme.spacing(4), // Ample room around the content
    display: 'flex',
    justifyContent: 'center', // Center the sections horizontally
  },
  headerSpace: {
    width: '50%',
    margin: '0 auto',
    display: 'inline-block',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '300px', // If screen is small, stack the footer content
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
    margin: '0 auto',       // Center the image horizontally
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

const Depot = () => {
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

  const location = useLocation();
  const topSoilRef = useRef(null);
  const interlockRef = useRef(null);
  const aggregatesRef = useRef(null);
  const retainingWallsRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      scrollToSection(sectionId);
    }
  }, [location]);

  function scrollToSection(sectionId) {
    let sectionRef;
    let offset = 120; 

    switch (sectionId) {
      case 'top-soil':
        sectionRef = topSoilRef;
        break;
      case 'interlock':
        sectionRef = interlockRef;
        break;
      case 'aggregates':
        sectionRef = aggregatesRef;
        break;
      case 'retaining-walls':
        sectionRef = retainingWallsRef;
        break;
      default:
        return;
    }

    if (sectionRef && sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
      });
    }
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
                DEPOT
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
              Our Depot
            </Typography>
            <Typography variant="body1" className={classes.headerDescription}>
              Welcome to our outdoor depot, your destination for quality landscape materials and expert advice. 
              As a your local landscape construction company, we take pride in offering an extensive selection of premium
              topsoil, interlock, retaining walls, and aggregates. Whether you're transforming your backyard oasis or embarking 
              on a large-scale project, our depot is stocked with everything you need to elevate your outdoor space. 
              With a commitment to excellence and a passion for helping our customers bring their visions to life, we're here 
              to provide top-notch materials and support every step of the way.
            </Typography>
          </Box>
        </div>
        <img src="/horizontal_line.png" alt="line" className={classes.horizontalLine}/>
        <div>
          <div ref={topSoilRef}>
            <InfoCard
              title="Foundation for Growth"
              subtitle="Top Soil"
              description="Our top-quality topsoil is the cornerstone of successful landscaping projects, providing a nutrient-rich 
              foundation for healthy plant growth and robust landscaping endeavors. Whether you're creating raised beds for a 
              flourishing garden, regrading a lawn for improved drainage, or embarking on a large-scale construction project, our 
              topsoil ensures optimal growing conditions."
              image={topSoilImage}
              link="/services/demolition"
              imageOnRight={false}
              hideButton={true}
            />
          </div>
          <div ref={interlockRef}>
            <InfoCard
              title="Resilient Pathway Design"
              subtitle="Interlock"
              description="At Jason's Landscaping, our range of interlocking pavers serves as the perfect solution for versatile 
              and visually stunning hardscaping projects. Ideal for creating elegant driveways, captivating walkways, or even 
              intricate patio designs, our interlock options offer durability, aesthetic appeal, and easy installation."
              image={interlockImage}
              link="/services/septic-systems"
              imageOnRight={true}
              hideButton={true}
            />
          </div>
          <div ref={aggregatesRef}>
            <InfoCard
              title="Varied Landscaping Mixes"
              subtitle="Aggregates"
              description="Whether clients are working on pathways, driveways, or creating a sturdy base for patios and outdoor 
              spaces, our aggregates provide essential support and stability. From enhancing drainage in gardens to serving as a 
              foundation for large-scale construction, our diverse selection of aggregates caters to the specific needs of both 
              residential and commercial projects, ensuring reliable performance and enduring quality."
              image={aggregatesImage}
              link="/services/flatbed-and-towing"
              imageOnRight={false}
              hideButton={true}
            />
          </div>
          <div ref={retainingWallsRef}>
            <InfoCard
              title="Elegant Structural Solutions"
              subtitle="Retaining Walls"
              description="Our selection of retaining walls serves as a fundamental component for creating structurally sound and 
              visually appealing landscapes. Whether it's defining elevated flower beds in a residential setting, preventing soil 
              erosion on sloped terrains, or crafting multi-tiered garden spaces, our retaining walls offer both functionality and 
              aesthetics."
              image={retainingWallsImage}
              link="/services/road-construction"
              imageOnRight={true}
              hideButton={true}
            />
          </div>
        </div>
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

export default Depot;