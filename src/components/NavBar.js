import React from 'react'
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        display: "inline-block"
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})
//<img src={logoMobile} className={classes.logoMobile}/> 
function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src="j&s_logo.jpg" alt="logo" className={classes.logo}/> 
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
                <CustomBtn txt="Trial Our Product"/>
            </Toolbar>
    )
}

export default NavBar
