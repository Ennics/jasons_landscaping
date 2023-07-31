import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons//ArrowBack';
import ArrowForwardIcon from '@material-ui/icons//ArrowForward';

const useStyles = makeStyles((theme) => ({
  reviewSection: {
    width: '450px',
    marginTop: theme.spacing(3),
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  reviewText: {
    fontSize: '0.8rem',
    color: '#777',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(-2),
    textAlign: 'center',
  },
  ownerName: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  reviewContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  arrows: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  arrowButton: {
    backgroundColor: '#fff',
    color: '#800000',
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: '#800000',
    margin: theme.spacing(0, 0.5),
    transition: 'background-color 0.3s',
  },
  activeDot: {
    backgroundColor: '#fff',
    border: '2px solid #800000',
  },
  reviewContainer: {
    height: '100px', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden',
  },
}));

const reviews = [
  {
    text: 'I have known Jason for over 15 years and he has done excellent work for my parent\'s home (stone and grade improvement) and I have just had tree removal, shrub trimming, and a complete front lawn re-sodded. Jason and his team are fast and the work performed is top shelf!',
    owner: 'Mike',
  },
  {
    text: 'We recently used Jason\'s Landscaping to do our septic bed and foundation excavation. Jason and his crew was very professional and on time.  I would strongly recommend them.',
    owner: 'Al',
  },
  {
    text: 'I have had Jason\'s do a few Jobs for me. Most recent was landscaping, leveling our lot and installing armour stone. Job was done quickly and price was good as was the job. Only landscaping company I have used and always my first call.',
    owner: 'Grant',
  },
  {
    text: 'Just had my backyard graded and Jason went above and beyond for us. Wanted to say thank you for your amazing work, definitely would hire you again.',
    owner: 'Tracy',
  },
  {
    text: 'I have called in Jason a few times and have found they are very reliable and professional every time. I will continue to go with this company and recommend them to anyone who is looking for an experienced company to get the job done right.',
    owner: 'Jess',
  },
  {
    text: 'This guy just does it all! Reliable and affordable you can count on Jason\'s for all your groundskeeping needs! Highly recommend.',
    owner: 'Lyse',
  },
  {
    text: 'Excellent service and great quality stuff. Highly recommend for anyone looking for soil, mulch, and stones in the westend.',
    owner: 'Fawzi',
  },
  // Add more reviews as needed
];

const ReviewSection = () => {
  const classes = useStyles();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    // Code to handle the automatic scroll every 3 seconds
    const interval = setInterval(() => {
      handleNextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentReviewIndex]);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes.reviewSection}>
      <img src="quotation_png.png" width="10%" display="inline-block" alt="quotes"/>
      <div className={classes.reviewContent}>
        <Box className={classes.reviewContainer}>
          <Typography className={classes.reviewText}>
            {reviews[currentReviewIndex].text}
          </Typography>
        </Box>
      </div>
      <Typography className={classes.ownerName}>
        {reviews[currentReviewIndex].owner}
      </Typography>
      <div className={classes.dots}>
        <div
          className={classes.arrowButton}
          onClick={handlePrevReview}
        >
          <ArrowBackIcon />
        </div>
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`${classes.dot} ${index === currentReviewIndex ? classes.activeDot : ''}`}
          />
        ))}
        <div
          className={classes.arrowButton}
          onClick={handleNextReview}
        >
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
