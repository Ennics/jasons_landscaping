import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none', // Hide the menu button for larger screens
    },
  },
  navItems: {
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Hide the navigation items for smaller screens
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Hamburger Menu Icon */}
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Navigation Items */}
        <div className={classes.navItems}>
          {/* Add your navigation buttons here */}
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          {/* ... Other navigation buttons ... */}
        </div>
      </Toolbar>

      {/* Responsive Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            marginTop: '48px', // Adjust the distance from the top
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
        {/* ... Other menu items ... */}
      </Menu>
    </AppBar>
  );
};

export default Navigation;
