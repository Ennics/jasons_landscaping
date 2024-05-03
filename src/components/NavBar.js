import React, { useState } from 'react';
import {AppBar, Typography, Box, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles"; 
import {Link} from 'react-router-dom';

const styles = makeStyles((theme) => ({
    bar:{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        justifyContent: "space-between",
        paddingTop: "0.5rem",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgba(0, 0, 0, 0.87)'
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
        fontSize: "16px",
        cursor: "pointer", 
        color:  "#696767",
        flexGrow: 0.05,
        padding: '0.25rem',
        borderRadius: '10px',
        transition: 'color 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
        "&:hover": {
            color: "#800000",
            boxShadow: '0px 2px 4px rgba(128, 0, 0, 0.2)'
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
    link: {
        position: 'relative',
        display: 'inline-block',
        textDecoration: "none",
        paddingRight: "1rem",
        color: "#000000",
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      navItems: {
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      dropdownContent: {
        display: 'inline-block',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        width: '150px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
        zIndex: 1,
      },
      linkElement: {
        display: 'block',
        textAlign: 'center',
        padding: theme.spacing(1),
        textDecoration: 'none',
        color: '#545454',
        transition: 'color 0.5s ease-in-out, background-color 0.5s ease-in-out',
        "&:hover": {
            backgroundColor: "#800000",
            color: 'white'
        },
      }
}));

function NavBar() {
    const classes = styles()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

  const [areSercicesHovered, setServicesHovered] = useState(false);
  const [isDepotHovered, setDepotHovered] = useState(false);

    return (
        <div>
            <AppBar position="fixed" className={classes.bar}>   
                <Box className={classes.box}>
                    <Box flexGrow={0.25}/>
                    <Link to="/" className={classes.logo}>
                        <img src="/j_and_s_logo.png" width="100%" display="inline-block" alt="logo"/>
                    </Link> 
                    <Box flexGrow={1}/>
                    <Toolbar>
                        <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={handleMenuClick}
                        >
                        <MenuIcon />
                        </IconButton>
                        <div className={classes.navItems}>
                            <Link to="/" className={classes.link}>
                                <Typography component="span" variant="h6" className={classes.menuItem}>
                                    Home
                                </Typography>
                            </Link>
                            <Link to="/about" className={classes.link}>
                                <Typography component="span" variant="h6" className={classes.menuItem}>
                                    About Us
                                </Typography>
                            </Link>
                            <Link to="/services" className={classes.link} 
                                onMouseEnter={() => setServicesHovered(true)}
                                onMouseLeave={() => setServicesHovered(false)}>
                                <Typography component="span" variant="h6" className={classes.menuItem}>
                                    Services
                                </Typography>
                                {areSercicesHovered && (
                                    <div className={classes.dropdownContent}>
                                        <Link to="/services/site-prep" className={classes.linkElement}>Site Prep</Link>
                                        <Link to="/services/demolition" className={classes.linkElement}>Demolition</Link>
                                        <Link to="/services/septic-systems" className={classes.linkElement}>Septic Systems</Link>
                                        <Link to="/services/flatbed-and-towing" className={classes.linkElement}>Flatbed & Towing</Link>
                                        <Link to="/services/road-construction" className={classes.linkElement}>Road Construction</Link>
                                    </div>
                                )}
                            </Link>
                            <Link to="/depot" className={classes.link}
                                onMouseEnter={() => setDepotHovered(true)}
                                onMouseLeave={() => setDepotHovered(false)}>
                                <Typography component="span" variant="h6" className={classes.menuItem}>
                                    Depot 
                                </Typography>
                                {isDepotHovered && (
                                    <div className={classes.dropdownContent}>
                                        <Link to="/depot#top-soil" className={classes.linkElement}>Top Soil</Link>
                                        <Link to="/depot#interlock" className={classes.linkElement}>Interlock</Link>
                                        <Link to="/depot#aggregates" className={classes.linkElement}>Aggregates</Link>
                                        <Link to="/depot#retaining-walls" className={classes.linkElement}>Retaining Walls</Link>
                                    </div>
                                )}
                            </Link>
                            <Link to="/careers" className={classes.link}>
                                <Typography component="span" variant="h6" className={classes.menuItem}>
                                    Careers 
                                </Typography>
                            </Link>
                            <Link to="/contact" className={classes.link}>
                                <Typography component="span" variant="h6" className={classes.menuItem}>
                                    Contact Us 
                                </Typography>
                            </Link>
                        </div>
                    </Toolbar>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                        style: {
                            marginTop: '48px',
                        },
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/" className={classes.link}>
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/about" className={classes.link}>
                                About Us
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/services" className={classes.link}>
                                Services
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/depot" className={classes.link}>
                                Depot
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/careers" className={classes.link}>
                                Careers
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to="/contact" className={classes.link}>
                                Contact Us
                            </Link>
                        </MenuItem>
                    </Menu>
                </Box>
            </AppBar>
        </div>
    )
}

export default NavBar;
