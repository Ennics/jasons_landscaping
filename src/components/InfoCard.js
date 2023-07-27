// InfoCard.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: '65%',
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    height: "20vw",
    boxShadow: 'none'
  },
  media: {
    width: '50%', // Adjust the width of the image as needed
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
    width: "30%",
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
    fontWeight: "bold"
  },
  subtitle: {
    color: "maroon"
  }
}));

const InfoCard = ({ title, subtitle, description, image, link, imageOnRight }) => {
  const classes = useStyles();
  
  if (imageOnRight == true) {
    return (
        <Card className={classes.card}>
        <CardContent className={classes.content}>
            <Box className={classes.titleBox}>
                <Typography variant="h6" className={`${classes.typography} ${classes.subtitle}`} gutterBottom>
                    {subtitle}
                </Typography>
                <Typography variant="h5" className={classes.typography} gutterBottom>
                    {title}
                </Typography>
            </Box>
            <Typography variant="body0" gutterBottom>
            {description}
            </Typography>
            <Button component={Link} to={link} variant="contained" className={classes.learnMoreButton}>
            Learn More
            </Button>
        </CardContent>
        <CardMedia className={classes.media} image={image}/>
        </Card>
    )
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image}/>
      <CardContent className={classes.contentRight}>
        <Box className={classes.titleBox}>
            <Typography variant="h6" className={`${classes.typography} ${classes.subtitle}`} gutterBottom>
                {subtitle}
            </Typography>
            <Typography variant="h5" className={classes.typography} gutterBottom>
                {title}
            </Typography>
        </Box>
        <Typography variant="body0" gutterBottom>
          {description}
        </Typography>
        <Button component={Link} to={link} variant="contained" className={classes.learnMoreButtonLeft}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
