import React, { useState, useEffect } from 'react';
import NavBar from '../shared/NavBar.jsx';
import useStyles from '../shared/styles.js';
import { Button } from '@material-ui/core';

//this will correspond to '/orderpost' endpoint
const OrderConfirmationPage = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    // needs to redirect to landing page use React Router
  };

  return (
    <>
      <NavBar/>
      <img src="https://user-images.githubusercontent.com/32146990/131901160-ba7a0154-0275-4456-b3d2-f6fe20b18fda.png">Placeholder for Shopping Bag Image</img>
      <h3>THANK YOU FOR SHOPPING WITH US</h3>
      <div>Check your email for order confirmation</div>
      <Button onClick={handleClick}>Shop Again</Button>
    </>
  );
};

export default OrderConfirmationPage;
