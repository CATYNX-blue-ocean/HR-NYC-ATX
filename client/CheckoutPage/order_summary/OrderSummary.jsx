import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import useDataStore from '../../zustandStore.js';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const OrderSummary = () => {
  const cart = useDataStore((state) => state.cart);
  const isCheckout = useDataStore((state) => state.isCheckout);
  const setIsCheckout = useDataStore((state) => state.setIsCheckout);
  const itemsPrice = useDataStore((state) => state.itemsPrice);
  const classes = useStyles();

  console.log(cart);
  // let itemsPrice = 0;
  // cart.map((item) => {
  //   itemsPrice += Number(item.price);
  // });

  return (
    <Card className={classes.root}>
      <Grid container spacing={3} style={{ padding: '25px' }}>
        <Grid item xs={12} style={{ margin: 'auto' }}>
          <h3>Order Summary</h3>
          <h3>{cart.length} Items</h3>
        </Grid>
        <Grid item xs={6}>
          <p>Subtotal:</p>
          <p>Shipping:</p>
          <p>Total before tax:</p>
          <p>Estimated tax:</p>
          <b>Total:</b>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <p>${Number(itemsPrice).toFixed(2)}</p>
          <p>$2.99</p>
          <p>${itemsPrice + 2.99}</p>
          <p>${Number(((itemsPrice / 100) * 7)).toFixed(2)}</p>
          <b>${Number(((itemsPrice / 100) * 7 + itemsPrice)).toFixed(2)}</b>
        </Grid>
        <Grid item xs={12}>
          {!isCheckout && (
            <Link to="/checkout">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#5E2EBA',
                  color: 'white',
                  boxSizing: 'border-box',
                  width: '100%',
                }}
                onClick={() => setIsCheckout(!isCheckout)}
              >
                Proceed to Checkout
              </Button>
            </Link>
          )}
          {isCheckout && (
            <Link to="/confirmation">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#5E2EBA',
                  color: 'white',
                  boxSizing: 'border-box',
                  width: '100%',
                }}
                onClick={() => setIsCheckout(!isCheckout)}
              >
                Checkout
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrderSummary;
