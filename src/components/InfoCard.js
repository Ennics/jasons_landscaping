// InfoCard.js
import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FlashAutoTwoTone } from '@material-ui/icons';

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

const InfoCard = ({ title, subtitle, description, image, link, imageOnRight, hideButton }) => {
  const classes = useStyles();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth < 950) {
    return (
      <Card className={classes.smallCardContainer}>
        <CardMedia className={classes.smallMedia} image={image}/>
        <CardContent className={classes.smallContent}>
          <Box className={classes.titleBox}>
              <Typography variant="h6" className={`${classes.typography} ${classes.subtitle}`} gutterBottom>
                  {subtitle}
              </Typography>
              <Typography variant="h5" className={classes.typography} gutterBottom>
                  {title}
              </Typography>
          </Box>
          <Typography variant="body1" gutterBottom className={classes.boxDescription}>
            {description}
          </Typography>
        </CardContent>
        <div className={hideButton ? classes.hiddenButton : ''}>
          <Button component={Link} to={link} variant="contained" className={classes.learnMoreButtonSmall}>
            Learn More
          </Button>
        </div> 
      </Card>
    )
  }
  
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
              <Typography variant="body1" gutterBottom className={classes.boxDescription}>
                {description}
              </Typography>
              <div className={hideButton ? classes.hiddenButton : ''}>
                <Button component={Link} to={link} variant="contained" className={classes.learnMoreButton}>
                Learn More
                </Button>
              </div>
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
        <Typography variant="body1" gutterBottom className={classes.boxDescription}>
          {description}
        </Typography>
        <div className={hideButton ? classes.hiddenButton : ''}>
          <Button component={Link} to={link} variant="contained" className={classes.learnMoreButtonLeft}>
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
