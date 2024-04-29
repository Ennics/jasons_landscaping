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
    boxShadow: 'none',
  },
  media: {
    width: '550px',
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
    fontSize: '0.8rem',
    color: 'maroon',
    backgroundColor: 'transparent',
    border: '2px solid maroon',
    width: "125px",
    alignSelf: 'flex-end',
    justifyContent: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'maroon',
      color: 'white',
    }
  },
  learnMoreButtonLeft: {
    fontSize: '0.8rem',
    color: 'maroon',
    backgroundColor: 'transparent',
    border: '2px solid maroon',
    width: "125px",
    justifyContent: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'maroon',
      color: 'white',
    },
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2)
  },
  typography: {
    marginBottom: theme.spacing(-1),
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
    boxShadow: 'none',
    alignItems: 'center',
    textAlign: 'center',
  },
  smallMedia: {
    width: '50%',
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
    fontSize: '0.8rem',
    color: 'maroon',
    backgroundColor: 'transparent',
    border: '2px solid maroon',
    width: "125px",
    justifyContent: "center",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2),
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'maroon',
      color: 'white',
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
