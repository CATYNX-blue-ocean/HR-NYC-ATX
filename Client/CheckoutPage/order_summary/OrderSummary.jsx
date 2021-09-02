import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import useDataStore from '../../zustandStore.js';
import Button from '@material-ui/core/Button';

const OrderSummary = () => {
  const cart = useDataStore((state) => state.cart);
  const test = useDataStore((state) => state.setCategoryInformation);
  const test2 = useDataStore((state) => state.test2);

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
          <h3>Total:</h3>
        </Grid>
        <Grid item xs={6} styles={{ float: 'right' }}>
          <p>${itemsPrice}</p>
          <p>$2.99</p>
          <p>${itemsPrice + 2.99}</p>
          <p>${(itemsPrice / 100) * 7}</p>
          <h3>${(itemsPrice / 100) * 7 + itemsPrice + 2.99}</h3>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={onClick}>CHECKOUT</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummary;
