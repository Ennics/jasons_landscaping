import React from 'react'
import {AppBar, Typography, Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import {Link} from 'react-router-dom';

const styles = makeStyles({
    bar:{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        justifyContent: "space-between",
        paddingTop: "0.5rem",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    box:{
        display: "flex",
        alignItems: "center"
    },
    logo: {
        width: "175px", 
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
    },
    link: {
        textDecoration: "none",
        flexGrow: 0.05
    }
})

function NavBar() {
    const classes = styles()
    return (
        <div>
            <AppBar position="fixed" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <Box className={classes.box}>
                    <Box flexGrow={0.25}/>
                    <Link to="/" className={classes.logo}>
                        <img src="j_and_s_logo.png" width="100%" display="inline-block" alt="logo"/>
                    </Link> 
                    <Box flexGrow={1}/>
                    <Link to="/" className={classes.link}>
                        <Typography component="span" variant="h8" className={classes.menuItem}>
                            Home
                        </Typography>
                    </Link>
                    <Link to="/about" className={classes.link}>
                        <Typography component="span" variant="h8" className={classes.menuItem}>
                            About Us
                        </Typography>
                    </Link>
                    <Link to="/services" className={classes.link}>
                        <Typography component="span" variant="h8" className={classes.menuItem}>
                            Services
                        </Typography>
                    </Link>
                    <Link to="/products" className={classes.link}>
                        <Typography component="span" variant="h8" className={classes.menuItem}>
                            Products 
                        </Typography>
                    </Link>
                    <Link to="/careers" className={classes.link}>
                        <Typography component="span" variant="h8" className={classes.menuItem}>
                            Careers 
                        </Typography>
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        <Typography component="span" variant="h8" className={classes.menuItem}>
                            Contact Us 
                        </Typography>
                    </Link>
                </Box>
            </AppBar>
        </div>
    )
}

export default NavBar;
