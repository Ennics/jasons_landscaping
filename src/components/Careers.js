// Careers.js
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, Button } from '@material-ui/core'; 

const handleClick = () => {
  fetch('https://ddz0uxvooi.execute-api.us-east-2.amazonaws.com/prod')
  .then(response => response.json())
  .then(data => console.log(data));
}

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
});

const Careers = () => {
  useScrollToTop();

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
        <h1>Careers</h1>
        <p>This is the Careers page content.</p>
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