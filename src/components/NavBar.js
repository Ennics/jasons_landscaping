import React from 'react'
import CustomBtn from './CustomBtn'
import {AppBar, Typography, Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        justifyContent: "space-between",
        paddingTop: "0.5rem",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    box:{
        display: "flex",
        alignItems: "center"
    },
    logo: {
        width: "10%", 
        display: "inline-block"
    },
    menuItem: {
        cursor: "pointer", 
        color:  "#696767",
        flexGrow: 0.05,
        transition: 'color 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
        "&:hover": {
            color: "#800000",
            boxShadow: '0px 2px 4px rgba(128, 0, 0, 0.2)'
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <AppBar position="fixed" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Box className={classes.box}>
                    <Box flexGrow={0.25}/>
                    <img src="j_and_s_logo.png" alt="logo" className={classes.logo}/> 
                    <Box flexGrow={1}/>
                    <Typography variant="h8" className={classes.menuItem}>
                    Home
                    </Typography>
                    <Typography variant="h8" className={classes.menuItem}>
                        About Us
                    </Typography>
                    <Typography variant="h8" className={classes.menuItem}>
                        Services
                    </Typography>
                    <Typography variant="h8" className={classes.menuItem}>
                        Products 
                    </Typography>
                    <Typography variant="h8" className={classes.menuItem}>
                        Careers 
                    </Typography>
                    <Typography variant="h8" className={classes.menuItem}>
                        Contact Us 
                    </Typography>
                </Box>
            </AppBar>
    )
}

export default NavBar
