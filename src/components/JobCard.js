// JobCard.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: '1000px',
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    height: "350px",
    boxShadow: 'none', //none
  },
  media: {
    width: '550px', // Adjust the width of the image as needed
    boxShadow: `0px 8px 15px rgba(139, 0, 0, 0.5)`
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'right',
    margin: theme.spacing(1, 5)
  },
  contentRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    margin: theme.spacing(1, 5)
  },
  learnMoreButton: {
    fontSize: '0.8rem', // Set the font size to make the button smaller
    color: 'maroon', // Set the text color to maroon
    backgroundColor: 'transparent', // Make the background transparent
    border: '2px solid maroon', // Add a border around the button
    width: "125px",
    alignSelf: 'flex-end',
    justifyContent: "center",
    borderRadius: theme.spacing(1), // Add border radius for a rounded look
    padding: theme.spacing(1, 2), // Add padding to the button
    marginTop: theme.spacing(2),
    transition: 'background-color 0.2s ease-in-out', // Add a smooth transition on hover
    '&:hover': {
      backgroundColor: 'maroon', // Change the background color on hover
      color: 'white', // Change the text color on hover
    }
  },
  learnMoreButtonLeft: {
    fontSize: '0.8rem', // Set the font size to make the button smaller
    color: 'maroon', // Set the text color to maroon
    backgroundColor: 'transparent', // Make the background transparent
    border: '2px solid maroon', // Add a border around the button
    width: "125px",
    justifyContent: "center",
    borderRadius: theme.spacing(1), // Add border radius for a rounded look
    padding: theme.spacing(1, 2), // Add padding to the button
    marginTop: theme.spacing(2),
    transition: 'background-color 0.2s ease-in-out', // Add a smooth transition on hover
    '&:hover': {
      backgroundColor: 'maroon', // Change the background color on hover
      color: 'white', // Change the text color on hover
    },
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2)
  },
  typography: {
    marginBottom: theme.spacing(-1), // Reduce the margin between Typography elements
    fontWeight: "bold",
  },
  subtitle: {
    color: "maroon"
  },
  smallCardContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    boxShadow: 'none', //none
    alignItems: 'center',     // Center horizontally
    textAlign: 'center',      // Center text content
  },
  smallMedia: {
    width: '50%', // Adjust the width of the image as needed
    height: '100%',
    minHeight: '200px',
    boxShadow: `0px 8px 15px rgba(139, 0, 0, 0.5)`,
    marginBottom: theme.spacing(2),
  },
  smallContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: theme.spacing(1, 5)
  },
  learnMoreButtonSmall: {
    fontSize: '0.8rem', // Set the font size to make the button smaller
    color: 'maroon', // Set the text color to maroon
    backgroundColor: 'transparent', // Make the background transparent
    border: '2px solid maroon', // Add a border around the button
    width: "125px",
    justifyContent: "center",
    borderRadius: theme.spacing(1), // Add border radius for a rounded look
    padding: theme.spacing(1, 2), // Add padding to the button
    transition: 'background-color 0.2s ease-in-out', // Add a smooth transition on hover
    '&:hover': {
      backgroundColor: 'maroon', // Change the background color on hover
      color: 'white', // Change the text color on hover
    },
  },
  hiddenButton: {
    display: "none"
  },
  boxDescription: {
    color: '#545454',
  }
}));

const JobCard = ({ title, subtitle, description, image, link, imageOnRight, hideButton }) => {
  const classes = useStyles();

  return (
    <div key={index} className={classes.jobContainer}>
        <h2 className={classes.jobTitle}>{job.jobName}</h2>
        <p className={classes.datePosted}>Date Posted: {job['date-posted']}</p>
        <p className={classes.description}>Description: {job.description}</p>
        <p className={classes.type}>Type: {job.type}</p>
        <p className={classes.requirements}>Requirements: {job.requirements.join(', ')}</p>
        <p className={classes.location}>Location: {job.location}</p>
        {job.salary && <p className={classes.salary}>Salary: {job.salary}</p>}
    </div>
  );
};

export default JobCard;
