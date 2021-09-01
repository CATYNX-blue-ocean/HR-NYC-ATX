import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import useDataStore from '../../zustandStore.js';

const OrderSummary = () => {
  // const [cartItems, setCart] = useState([]);
  const cart = useDataStore((state) => state.cart);
  console.log(cart);
  let itemsPrice = 0;
  cart.map((item) => {
    itemsPrice += Number(item.price);
  });

  return (
    <div>
      <Grid container spacing={3} style={{ padding: '25px' }}>
        <Grid item xs={12}>
          <h3>Order Summary</h3>
          <h3>{cart.length} Items</h3>
        </Grid>
        <Grid item xs={6}>
          <p>Items:</p>
          <p>Shipping:</p>
          <p>Total before tax:</p>
          <p>Estimated tax:</p>
        </Grid>
        <Grid item xs={6}>
          <p>${itemsPrice}</p>
          <p>$2.99</p>
          <p>${itemsPrice + 2.99}</p>
          <p>${itemsPrice + 2.99}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummary;
