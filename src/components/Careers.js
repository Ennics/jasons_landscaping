// Careers.js
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, Button } from '@material-ui/core'; 
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  jobContainer: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '16px',
    borderRadius: '4px',
  },
  jobTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  location: {
    fontSize: '1rem',
  },
  description: {
    fontSize: '1rem',
  },
  requirements: {
    fontSize: '1rem',
  },
  coverImageContainer: {
    position: 'relative',
    height: '870px',
    overflow: 'hidden', 
    backgroundImage: `url('/careers_cover4.jpeg')`,
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
});

const Careers = () => {
  useScrollToTop();

  function scrollToFirstSection() {
    const firstSectionOffsetTop = document.getElementById('first-section').offsetTop;
    window.scrollTo({
      top: firstSectionOffsetTop,
      behavior: 'smooth',
    });
  }

  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  
  const apiUrl = 'https://ddz0uxvooi.execute-api.us-east-2.amazonaws.com/prod';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Convert the object of jobs into an array of job objects
        const jobArray = Object.keys(data).map((jobName) => ({
          jobName,
          ...data[jobName],
        }));
        setJobs(jobArray);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        <NavBar/>
        <div className={classes.coverImageContainer}/>
        <Fade in={true} timeout={2000}>
          <div>
            <div className={classes.overlay}>
              <div className={classes.boldWord}>
                CAREERS
              </div>
              <div className={classes.arrowAnimation}>
                <div className={classes.buttonContainer}>
                  <ArrowDownwardIcon onClick={scrollToFirstSection} className={classes.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div>
          <h1>Job Listings</h1>
        </div>
        {jobs.map((job, index) => (
        <div key={index} className={classes.jobContainer}>
          <h2 className={classes.jobTitle}>{job.jobName}</h2>
          <p className={classes.datePosted}>Date Posted: {job['date-posted']}</p>
          <p className={classes.description}>Description: {job.description}</p>
          <p className={classes.type}>Type: {job.type}</p>
          <p className={classes.requirements}>Requirements: {job.requirements.join(', ')}</p>
          <p className={classes.location}>Location: {job.location}</p>
          {job.salary && <p className={classes.salary}>Salary: {job.salary}</p>}
        </div>
      ))}
        <Footer/>
    </div>
  );
};

export default Careers;