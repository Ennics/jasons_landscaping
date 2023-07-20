import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Typography} from '@material-ui/core'; 
import NavBar from './NavBar'
import Grid from './Grid'
import Footer from './Footer'
import AboutUs from './AboutUs'
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import Fade from '@material-ui/core/Fade';

const theme = createTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });
  
  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
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
      fontSize: "2.5vw",
      fontFamily: 'Georgia',
      marginTop: "-5vw"
    },
    boldWord: {
      fontWeight: "bold"
    }
})

function Home() {
    const classes = styles(); 
    return (
        <div>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <div>
                    <img src="cover_img_2.png" width="100%" alt="hero"/>
                    <Fade in={true} timeout={2000}>
                        <div>
                            <div className={classes.overlay}>
                               For All Your Landscape Construction Needs, <span className={classes.boldWord}>We've Got You Covered.</span>
                            </div>
                        </div>
                    </Fade>
                </div> 
                <div className={classes.wrapper}>
                    <Typography variant="h4" className={classes.bigSpace} color="primary">
                        Why Chose Jason's & Son Landscaping?
                    </Typography>
                    <Typography variant="h5" className={classes.littleSpace} color="primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
                    </Typography>
                </div>
                <div className={`${classes.grid} ${classes.bigSpace}`}>
                    <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
                    <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
                    <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
                </div>
                <div className={`${classes.grid} ${classes.littleSpace}`}>  
                    <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
                    <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
                    <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
                </div>
                <div className={classes.bigSpace}>
                    <Footer/>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default Home;