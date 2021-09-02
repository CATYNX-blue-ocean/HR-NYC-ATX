import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { AppBar, Badge, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
//icons won't let you destructure, leave them listed below as-is
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useStyles from './styles.js';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
//import useDataStore from '../ProductsPage/tempZustand.js';
import useDataStore from '../zustandStore.js';

const NavBar = () => {
  const classes = useStyles();
  const cart = useDataStore((state) => state.cart);
  const cartNumber = cart.length;
  let userName = useDataStore((state) => state.userName);
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('product');
  const [isProduct, setIsProduct] = useState(false);
  const [isService, setIsService] = useState(false);
  const [userCity, setUserCity] = useState();

  const resetProductData = useDataStore((state) => state.resetProductData);
  const resetServiceData = useDataStore((state) => state.resetServiceData);

  const handleSearchSubmit = (e, keyword, type) => {
    e.preventDefault();
    console.log('KEY WORD ', keyword);
    console.log('SEARCH TYPE ', type);
    axios.get(`/${type}/search/?keyword=${keyword}`)
      .then((result) => {
        //[OPTION1]update state for Product Container===========
        if (type === 'service') {
          resetServiceData(result.data);
          setIsService(true);
        } else {
          resetProductData(result.data);
          setIsProduct(true);
        }
        //[OPTION2] render its own page=========================
      })
      .catch((err) => {
        console.error(err);
      });
  };

  axios.get('http://ip-api.com/json')
    .then((results) => {
      setUserCity((results.data.city));
    })
    .catch((err) => {
      console.error(err);
    });


  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', color: 'black' }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="" style={{ textDecoration: 'none' }}>
              Odds 'n' Ends
            </Link>
          </Typography>
          <div className={classes.search}
            style={{ width: '45%' }}
          >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={(e) => handleSearchSubmit(e, searchInput, searchType)}>
              <InputBase
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <div onChange={(e) => setSearchType(e.target.value)}>
                <input type="radio" value="product" defaultChecked name="type" /> Product
                <input type="radio" value="service" name="type" /> Service
              </div>
            </form>
          </div>
          <div className={classes.search}
            style={{ width: '15%' }}
          >
            <div className={classes.searchIcon}>
              <LocationOnIcon />
            </div>
            <InputBase
              placeholder={userCity}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div
            style={{ marginRight: '5%' }}
          >
            <Typography variant="h6" noWrap>
              {userName ? `Hello, ${userName}` :
                <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                Sign in
                </Link>
              }
            </Typography>
          </div>
          <IconButton style={{ marginRight: '5%' }} aria-label="show new notifications" color="inherit">
            <Badge badgeContent={cartNumber} color="secondary">
              <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {isProduct && <Redirect to={{ pathname: '/products', }} />}
      {isService && <Redirect to={{ pathname: '/services', }} />}
    </div>
  );
};

export default withRouter(NavBar);