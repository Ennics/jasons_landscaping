import React from 'react'
import CustomBtn from './CustomBtn'
import {Toolbar, Typography, Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "0.5rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    box:{
        display: "flex",
        alignItems: "center"
    },
    logo: {
        width: "15%", 
        display: "inline-block"
    },
    menuItem: {
        color:  "#696767",
        cursor: "pointer", 
        flexGrow: 0.05,
        "&:hover": {
            color:  "#800000"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Box className={classes.box}>
                    <img src="j_and_s_logo.jpg" alt="logo" className={classes.logo}/> 
                    <Box flexGrow={1}/>
                    <Typography variant="h6" className={classes.menuItem}>
                    Home
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        About Us
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Services
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Products 
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Careers 
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Contact Us 
                    </Typography>
                </Box>
            </Toolbar>
    )
}

export default NavBar
