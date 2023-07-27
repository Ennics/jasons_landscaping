// ReviewSection.js
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons//ArrowBack';
import ArrowForwardIcon from '@material-ui/icons//ArrowForward';

// ReviewSection.js
const useStyles = makeStyles((theme) => ({
    reviewSection: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      height: '300px', // Adjust the height as per your requirement
      overflow: 'hidden',
    },
    quotationMark: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    quotationMarkImage: {
      // Add styles for the quotation mark image
    },
    reviewContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
    },
    review: {
      fontSize: '20px', // Adjust the font size as per your requirement
    },
    reviewerName: {
      fontWeight: 'bold',
      marginTop: theme.spacing(1),
    },
    arrows: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: theme.spacing(1),
    },
    arrow: {
      cursor: 'pointer',
      fontSize: '32px', // Adjust the arrow size as per your requirement
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(1),
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#ccc',
      margin: theme.spacing(1),
      cursor: 'pointer',
    },
    activeDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#000', // Active dot color
      margin: theme.spacing(1),
      cursor: 'pointer',
    },
}));
  
  

const ReviewSection = () => {
  const classes = useStyles();
  const reviews = [{ review: 'This website is amazing!', reviewer: 'John Doe' },{ review: 'I love it!', reviewer: 'Yo Yo' },{ review: 'YOU ARE THE BEST!', reviewer: 'Mama Mia' }
    // Add your review data here (review text and reviewer's name)
    // Example: { review: 'This website is amazing!', reviewer: 'John Doe' }
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto scroll reviews every 5 seconds
  useEffect(() => {
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
      {/* Review quotation mark image */}
      <div className={classes.quotationMark}>
        <img src="quotes_img.png" width="20%" display="inline-block" alt="quotes"/>
      </div>

      {/* Centered review and description */}
      <div className={classes.reviewContainer}>
        <Typography variant="h6" className={classes.review}>
          "{reviews[currentReviewIndex].review}"
        </Typography>
        <Typography variant="body1" className={classes.reviewerName}>
          - {reviews[currentReviewIndex].reviewer}
        </Typography>
      </div>

      {/* Left and right arrows */}
      <ArrowBackIcon
        className={classes.arrow}
        onClick={handlePrevReview}
      />
      <ArrowForwardIcon
        className={classes.arrow}
        onClick={handleNextReview}
      />

      {/* Dots */}
      <div className={classes.dots}>
        {reviews.map((_, index) => (
          <div
            key={index}
            className={
              index === currentReviewIndex
                ? classes.activeDot
                : classes.dot
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
