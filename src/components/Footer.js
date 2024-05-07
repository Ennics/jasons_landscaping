import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Box} from '@material-ui/core'; 
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import {makeStyles} from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#a34d4b',
    color: '#fff',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  section: {
    margin: theme.spacing(4),
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    maxWidth: '300px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    margin: theme.spacing(1),
    "&:hover": {
      color: "orange",
  },
  },
  footerText: {
    fontFamily: 'Arial, sans-serif',
    marginTop: theme.spacing(0),
    fontSize: '12px',

  },
  footerText2: {
    marginTop: theme.spacing(-3),
    fontSize: '14px',
    color: '#ffffff',
    textAlign: "center",
    justifyContent: 'center',
  },
  underlineImage: {
    marginTop: theme.spacing(-3),
    position: "relative",
    display: "inline-block",
    width: '25px',
    height: '30px'
  },
  bulletPoint: {
    marginTop: theme.spacing(-3),
    marginRight: theme.spacing(-0.5),
    position: "relative",
    display: "inline-block",
    width: '7px',
    height: '12px'
  },
  bbbLogo: {
    marginRight: theme.spacing(-0.5),
    position: "relative",
    display: "inline-block",
    width: '125px',
    height: '60px'
  },
  stack: {
    display: "flex",
    flexDirection: "row"
  },
  bbbLink: {
    textDecoration: "none",
  },
  horizontalLine: {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 0,
    width: '100%',
    maxWidth: 1200,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}));

const Footer = () => {
  const classes = useStyles();

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <footer className={classes.footer}>
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            OUR COMPANY
          </Typography>
          <img src="/red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Typography variant="body1" className={classes.description}>
            Your local construction company, proudly serving the Ottawa Valley community since 1998.
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            HELPFUL LINKS
          </Typography>
          <img src="/red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/about" className={classes.link}>
                <Typography component="span">
                    About Us
                </Typography>
            </Link>
          </Box>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/careers" className={classes.link}>
                <Typography component="span">
                    Careers
                </Typography>
            </Link>
          </Box>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/contact" className={classes.link}>
                <Typography component="span">
                    Contact
                </Typography>
            </Link>
          </Box>
          <Box className={classes.footerText}>
            <img src="/orange_arrow.png" alt="bullet" className={classes.bulletPoint}/>
            <Link to="/privacy-policy" className={classes.link}>
                <Typography component="span">
                    Privacy Policy
                </Typography>
            </Link>
          </Box>
        </Box>
        <Box className={classes.section}>
          <Typography variant="h6" className={classes.title}>
            CONTACT INFO
          </Typography>
          <img src="/red_underline.png" alt="underline" className={classes.underlineImage}/>
          <Typography variant="body1">
            Jasonslandscaping@bell.net
            <br />
            (613) 229-9977
          </Typography>
          <div className={classes.stack}>
            <IconButton
              component="a"
              href="https://www.facebook.com/jasonslandscapingandsnowplowing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon style={{ color: '#fff' }} />
            </IconButton>
            <Link to="https://www.bbb.org/ca/on/stittsville/profile/landscape-contractors/jasons-landscaping-and-snowplowing-inc-0117-3855" className={classes.bbbLink}>
              <img src="/bbb_logo.png" alt="BBB Acredited" className={classes.bbbLogo}/>
            </Link>
          </div>
        </Box>
      </footer>
      <Typography variant="body2" className={classes.footerText2}>
        &copy; {getCurrentYear()} Jason's Landscaping and Snowplowing Inc.
      </Typography>
    </div>
  );
};

export default Footer;