import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
      [theme.breakpoints.down("xs")]:{
          flexGrow: 1,
      }
  },
  headerOptions:{
      display:"flex",
      flex: 1,
      justifyContent:"flex-end",
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="left" className={classes.title} >
            Photos
          </Typography>
            {isMobile ? (   
              <>
              <IconButton
                className={classes.menuButton}
                aria-label="menu"
                edge="start"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={NavLink} to="/">Home</MenuItem>
                <MenuItem onClick={handleClose} component={NavLink} to="/users">User</MenuItem>
              </Menu></>) : (
                   <div className={classes.headerOptions}>
                       <Button  className={classes.menuButton}          
                           variant="contained" spacing={2}>
                           <MenuItem onClick={handleClose} component={NavLink} to="/">Home</MenuItem>
                        </Button>
                       <Button variant="contained" className={classes.menuButton}><MenuItem onClick={handleClose} component={NavLink} to="/users">User</MenuItem></Button>
                       <Button variant="contained" className={classes.menuButton}><MenuItem onClick={handleClose} component={NavLink} to="/:userId/places">Places</MenuItem></Button>
                   </div>
              )}
        </Toolbar>
      </AppBar>
    </div>
  );
}