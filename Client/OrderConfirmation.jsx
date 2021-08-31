import React, { useState, useEffect } from 'react';
import NavBar from './shared/NavBar.jsx';
import MakeStyles from './styles.js';
import { Button } from '@material-ui/core';


const OrderConfirmationPage = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    // needs to redirect to landing page use React Router
  };

  return (
    <>
      <NavBar/>
      <img src="https://picsum.photos/200">Placeholder for Shopping Bag Image</img>
      <h3>THANK YOU FOR SHOPPING WITH US</h3>
      <div>Check your email for order confirmation</div>
      <Button onClick={handleClick}>Shop Again</Button>
    </>
  );
};

export default OrderConfirmationPage;