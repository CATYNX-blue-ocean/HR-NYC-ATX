import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../shared/NavBar.jsx';
import useStyles from '../shared/styles.js';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';


const OrderConfirmationPage = (props) => {

  return (
    <>
      <Grid container justifyContent="center">
        <img src="https://user-images.githubusercontent.com/32146990/131901160-ba7a0154-0275-4456-b3d2-f6fe20b18fda.png"/>
      </Grid>
      <Grid container justifyContent="center">
        <h3>THANK YOU FOR SHOPPING WITH US</h3>
      </Grid>
      <Grid container justifyContent="center">
        <div>Check your email for order confirmation</div>
      </Grid>
      <Grid container justifyContent="center">
        <Link to="/">
          <Button
            variant="contained"
            style={{backgroundColor: '#5E2EBA', color: 'white'}}
            onClick={() => setIsCheckout(!isCheckout)}
          >
          Continue Shopping
          </Button>
        </Link>
      </Grid>
    </>
  );
};

export default OrderConfirmationPage;
