// Careers.js
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import useScrollToTop from './useScrollToTop';
import { useNavigate } from 'react-router-dom';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons//ArrowDownward';
import Fade from '@material-ui/core/Fade';
import jobsData from './jobsData.json'
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
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingImage: {
    width: 100,
    height: 100,
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
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const jobArray = Object.keys(jobsData).map((jobName) => ({
      jobName,
      ...jobsData[jobName],
    }));
    setJobs(jobArray);
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(selectedJob === job ? null : job);
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobInterest: '',
    additionalInfo: '',
    resume: null,
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFormData({ ...formData, resume: selectedFile });
    setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.jobInterest ||
      !formData.resume ||
      !recaptchaValue
    ) {
      alert('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    const userData = new FormData();

    userData.append('firstName', formData.firstName);
    userData.append('lastName', formData.lastName);
    userData.append('email', formData.email);
    userData.append('phone', formData.phone);
    userData.append('jobInterest', formData.jobInterest);
    userData.append('resume', formData.resume);
    userData.append('additionalInfo', formData.additionalInfo);

    try {
      const response = await fetch('/send-application', {
        method: 'POST',
        body: userData,
      });
      if (response.ok) {
        alert('Application submitted successfully!');
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Failed to submit application. Please try again later.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
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
        <div id="first-section" className={classes.whyChoseUsSection}>
          <Box className={classes.whyChoseUsHeader}>
            <Typography variant="h6" className={classes.whyChoseUsTitle}>
              Check Out Our Job Openings
            </Typography>
            <Typography variant="body1" className={classes.whyChoseUsDescription}>
              At Jason's Landscaping, we acknowledge that our employees are our most valuable asset. 
              We take pride in creating a supportive work environment that encourages ongoing 
              self-improvement and fosters a sense of togetherness, where our employees are treated like part of our family.
            </Typography>
          </Box>
        </div>
        <div className={classes.root}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>Job Name</TableCell>
                  <TableCell className={classes.tableHeaderCell}>Location</TableCell>
                  <TableCell className={classes.tableHeaderCell}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobs.map((job, index) => (
                  <React.Fragment key={index}>
                    <TableRow
                      onClick={() => handleJobClick(job)}
                      className={classes.tableBodyCell}
                    >
                      <TableCell>{job.name}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className={classes.dropdownButton}
                          onClick={() => handleJobClick(job)}
                        >
                          {selectedJob === job ? 'Hide Details' : 'Show Details'}
                        </Button>
                      </TableCell>
                    </TableRow>
                    {selectedJob === job && (
                      <TableRow>
                        <TableCell colSpan="3">
                          <div className={classes.detailsContainer}>
                            <Typography variant="h6" className={classes.sectionHeader}>
                              Description
                            </Typography>
                            <Typography>{job.description}</Typography>
                            <Typography variant="h6" className={classes.sectionHeader}>
                              Job Type
                            </Typography>
                            <Typography>{job.type}</Typography>
                            <Typography variant="h6" className={classes.sectionHeader}>
                              Requirements
                            </Typography>
                            <List>
                              {job.requirements.map((requirement, index) => (
                                <ListItem key={index} className={classes.listItem}>
                                  <ListItemText primary={`• ${requirement}`} />
                                </ListItem>
                              ))}
                            </List>
                            {job.benefits && (
                              <>
                                <Typography variant="h6" className={classes.sectionHeader}>
                                  Benefits
                                </Typography>
                                <List>
                                  {job.benefits.map((benefit, index) => (
                                    <ListItem key={index} className={classes.listItem}>
                                      <ListItemText primary={`• ${benefit}`} />
                                    </ListItem>
                                  ))}
                                </List>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
              <InputLabel>Job of Interest</InputLabel>
              <Select
                value={formData.jobInterest}
                onChange={handleChange('jobInterest')}
              >
                <MenuItem value="DZ-Dump-Truck-Driver">DZ Dump Truck Driver</MenuItem>
                <MenuItem value="AZ-Driver">AZ Driver</MenuItem>
                <MenuItem value="General-Labourer">General Labourer</MenuItem>
                <MenuItem value="General-Application">General Application</MenuItem>
              </Select>
            </FormControl>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className={classes.visuallyHidden}
              id="resume-input"
            />
            <label htmlFor="resume-input" className={classes.fileInputLabel}>
              <Button
                variant="contained"
                color="primary"
                component="span"
                className={classes.fileInputButton}
              >
                Upload Resume
              </Button>
            </label>
            {/* Display the file name */}
            {fileName && <p className={classes.selectedFileText}>Selected File: {fileName}</p>}
            <TextField
              label="Additional Information / Cover Letter (Optional)"
              multiline
              rows={4} // Adjust the number of rows as needed
              variant="outlined"
              fullWidth
              value={formData.additionalInfo}
              onChange={handleChange('additionalInfo')}
              className={classes.formControl}
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

export default Careers;