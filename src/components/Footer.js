import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Box} from '@material-ui/core'; 
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import {makeStyles} from "@material-ui/core/styles"; 

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: '#3B0032', // Dark maroon background color
//     color: '#fff', // Text color
//     padding: theme.spacing(4), // Ample room around the content
//     display: 'flex',
//     justifyContent: 'center', // Center the sections horizontally
//     alignItems: 'center', // Center the sections vertically
//     flexDirection: 'row', // Arrange sections horizontally
//   },
//   section: {
//     margin: theme.spacing(2), // Space between sections
//     textAlign: 'center', // Center the content within each section
//   },
//   title: {
//     fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
//     fontSize: '24px', // Replace with the desired font size
//     fontWeight: 'bold', // Replace with the desired font weight
//     marginBottom: theme.spacing(1), // Space between title and description
//   },
//   description: {
//     fontSize: '16px', // Replace with the desired font size
//   },
//   link: {
//     color: '#000', // Black color for the links
//     textDecoration: 'none', // Remove underline
//     fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
//     fontSize: '18px', // Replace with the desired font size
//     margin: theme.spacing(1), // Space between each link
//   },
// }));

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <footer className={classes.footer}>
//       {/* First Section */}
//       <Box className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Our Company
//         </Typography>
//         <Typography variant="body1" className={classes.description}>
//           A family-owned construction company with 25 years of experience.
//         </Typography>
//         <IconButton
//           component="a"
//           href="https://www.facebook.com/your-facebook-account/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FacebookIcon style={{ color: '#fff' }} />
//         </IconButton>
//       </Box>

//       {/* Second Section */}
//       <Box className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Helpful Links
//         </Typography>
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Typography variant="body1" className={classes.link}>
//             Home
//           </Typography>
//           <Typography variant="body1" className={classes.link}>
//             About Us
//           </Typography>
//           <Typography variant="body1" className={classes.link}>
//             Services
//           </Typography>
//           <Typography variant="body1" className={classes.link}>
//             Products
//           </Typography>
//           <Typography variant="body1" className={classes.link}>
//             Careers
//           </Typography>
//           <Typography variant="body1" className={classes.link}>
//             Contact Us
//           </Typography>
//         </Box>
//       </Box>

//       {/* Third Section */}
//       <Box className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Contact Info
//         </Typography>
//         <Typography variant="body1">
//           Email: contact@example.com
//           <br />
//           Phone: (123) 456-7890
//         </Typography>
//       </Box>
//     </footer>
//   );
// };

// export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#666666', // Grey background color
    color: '#fff', // Text color
    padding: theme.spacing(4), // Ample room around the content
    display: 'flex',
    justifyContent: 'center', // Center the sections horizontally
    alignItems: 'center', // Center the sections vertically
    flexDirection: 'row', // Arrange sections horizontally
  },
  section: {
    margin: theme.spacing(2), // Space between sections
    textAlign: 'center', // Center the content within each section
  },
  title: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '24px', // Replace with the desired font size
    fontWeight: 'bold', // Replace with the desired font weight
    marginBottom: theme.spacing(1), // Space between title and description
  },
  description: {
    fontSize: '16px', // Replace with the desired font size
    maxWidth: '300px', // Limit the width of the description box
    margin: '0 auto', // Center the description box horizontally
  },
  link: {
    color: '#000', // Black color for the links
    textDecoration: 'none', // Remove underline
    fontFamily: 'Arial, sans-serif', // Replace with the desired font-family
    fontSize: '18px', // Replace with the desired font size
    margin: theme.spacing(1), // Space between each link
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {/* First Section */}
      <Box className={classes.section}>
        <Typography variant="h6" className={classes.title}>
          Our Company
        </Typography>
        <Typography variant="body1" className={classes.description}>
          A family-owned construction company with 25 years of experience.
        </Typography>
        <IconButton
          component="a"
          href="https://www.facebook.com/jasonslandscapingandsnowplowing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon style={{ color: '#fff' }} />
        </IconButton>
      </Box>

      {/* Second Section */}
      <Box className={classes.section}>
        <Typography variant="h6" className={classes.title}>
          Helpful Links
        </Typography>
        <Typography variant="body1">
          <a href="#">Home</a> | <a href="#">About Us</a> |{' '}
          <a href="#">Services</a> | <a href="#">Products</a> |{' '}
          <a href="#">Careers</a> | <a href="#">Contact Us</a>
        </Typography>
      </Box>

      {/* Third Section */}
      <Box className={classes.section}>
        <Typography variant="h6" className={classes.title}>
          Contact Info
        </Typography>
        <Typography variant="body1">
          Email: contact@example.com
          <br />
          Phone: (123) 456-7890
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;