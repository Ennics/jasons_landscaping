// Contact.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Button,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import ReCAPTCHA from 'react-google-recaptcha';

const theme = createTheme({});

const useStyles = makeStyles({
  jobContainer: {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '16px',
    borderRadius: '4px',
  },
  coverImageContainer: {
    position: 'relative',
    height: '870px',
    overflow: 'hidden', 
    backgroundImage: `url('/contact_page_cover.jpeg')`,
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
      transform: 'translateY(-5px)',
    },
  },
  buttonContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '2px solid white',
  },
  arrowIcon: {
    color: 'white',
  },
  whyChoseUsSection: {
    color: '#000000',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  whyChoseUsHeader: {
    marginTop: theme.spacing(4),
    width: '600px',
    margin: '0 auto',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  },
  whyChoseUsTitle: {
    fontSize: '26px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'maroon'
  },
  whyChoseUsDescription: {
    color: '#545454',
    fontSize: '16px',
    textAlign: 'center',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '25px',
  },
  tableContainer: {
    borderRadius: 10,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    width: '750px',
  },
  table: {
    minWidth: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: 'maroon',
    color: 'white',
  },
  tableBodyCell: {
    backgroundColor: theme.palette.background.paper,
  },
  detailsContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: 10,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    marginTop: theme.spacing(1),
  },
  dropdownButton: {
    backgroundColor: 'maroon',
  },
  sectionHeader: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  },
  formContainer: {
    maxWidth: 700,
    margin: 'auto',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    borderRadius: 10,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  formControl: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: 'maroon',
  },
  fileInputLabel: {
    display: 'inline-block',
    cursor: 'pointer',
    margin: theme.spacing(2, 0),
  },
  fileInputButton: {
    width: '100%',
    backgroundColor: 'maroon',
  },
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: '0',
  },
  selectedFileText: {
    marginTop: theme.spacing(-1),
    fontSize: "14px",
    color: 'green',
    fontFamily: 'Roboto',
  },
  loadingOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // Slightly dimmed background color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's above other elements
  },
  loadingImage: {
    // Style for the loading image, adjust as needed
    width: 100,
    height: 100,
  },
});

const Contact = () => {
  useScrollToTop();

  function scrollToFirstSection() {
    const firstSectionOffsetTop = document.getElementById('first-section').offsetTop;
    window.scrollTo({
      top: firstSectionOffsetTop,
      behavior: 'smooth',
    });
  }

  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquirySubject: '',
    inquiryMessage: '',
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Check if all required fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.inquirySubject ||
      !formData.inquiryMessage ||
      !recaptchaValue
    ) {
      alert('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      // Send data to the server
      const response = await fetch('http://localhost:3001/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        alert('Message sent successfully!');
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Failed to send message. Please try again later.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <div>
        {isLoading && (
          <div className={classes.loadingOverlay}>
            <img src="/loading.gif" alt="Loading" className={classes.loadingImage} />
          </div>
        )}
        <NavBar/>
        <div className={classes.coverImageContainer}/>
        <Fade in={true} timeout={2000}>
          <div>
            <div className={classes.overlay}>
              <div className={classes.boldWord}>
                CONTACT US
              </div>
              <div className={classes.arrowAnimation}>
                <div className={classes.buttonContainer}>
                  <ArrowDownwardIcon onClick={scrollToFirstSection} className={classes.arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div id="first-section" className={classes.whyChoseUsSection}>
          <Box className={classes.whyChoseUsHeader}>
            <Typography variant="h6" className={classes.whyChoseUsTitle}>
              General Inquiries
            </Typography>
          </Box>
        </div>
        <Paper className={classes.formContainer}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              className={classes.formControl}
              value={formData.firstName}
              onChange={handleChange('firstName')}
              required
            />
            <TextField
              label="Last Name"
              className={classes.formControl}
              value={formData.lastName}
              onChange={handleChange('lastName')}
              required
            />
            <TextField
              label="Email"
              type="email"
              className={classes.formControl}
              value={formData.email}
              onChange={handleChange('email')}
              required
            />
            <TextField
              label="Phone Number"
              className={classes.formControl}
              value={formData.phone}
              onChange={handleChange('phone')}
              required
            />
            <FormControl className={classes.formControl} required>
              <InputLabel>Inquiry Subject</InputLabel>
              <Select
                value={formData.inquirySubject}
                onChange={handleChange('inquirySubject')}
              >
                <MenuItem value="Services">Services</MenuItem>
                <MenuItem value="Depot">Depot</MenuItem>
                <MenuItem value="Job Application">Job Application</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Message"
              multiline
              rows={6} // Adjust the number of rows as needed
              variant="outlined"
              fullWidth
              value={formData.inquiryMessage}
              onChange={handleChange('inquiryMessage')}
              className={classes.formControl}
              required
            />
            <ReCAPTCHA
              sitekey="6Ldi2BQpAAAAAJ__lCqeVTzAejXMeQRNS75dwAhr"
              onChange={handleRecaptchaChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Submit
            </Button>
          </form>
        </Paper>
        <Footer/>
    </div>
  );
};

export default Contact;