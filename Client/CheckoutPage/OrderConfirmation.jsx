import React, { useState, useEffect } from 'react';
import useStyles from '../shared/styles.js';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';


const OrderConfirmationPage = (props) => {

  // having issues redirecting to home page
  const handleClick = (e) => {
    e.preventDefault();
    axios.get('/', (res, err) => {
      if (res) {
        console.log(res);
      } else {
        console.log(err);
      }
    });
  };

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
        <Button onClick={handleClick}>Shop Again</Button>
      </Grid>
    </>
  );
};

export default OrderConfirmationPage;
