import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Badge, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
//icons won't let you destructure, leave them listed below as-is
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from './styles.js';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', color: 'black'}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="" style={{ textDecoration: 'none' }}>
              Odds 'n' Ends
            </Link>
          </Typography>
          <div className={classes.search}
            style={{width: '50%'}}
          >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.search}
            style={{width: '15%'}}
          >
            <div className={classes.searchIcon}>
              <LocationOnIcon />
            </div>
            <InputBase
              placeholder="Location…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div
            style={{marginRight: '5%'}}
          >
            <Typography variant="h6" noWrap>
              <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                Sign in
              </Link>
            </Typography>
          </div>
          <IconButton style={{marginRight: '5%'}} aria-label="show new notifications" color="inherit">
            <Badge badgeContent={1} color="secondary">
              <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;