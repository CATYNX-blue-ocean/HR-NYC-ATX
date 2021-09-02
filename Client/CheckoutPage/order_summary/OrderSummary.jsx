import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import useDataStore from '../../zustandStore.js';

const OrderSummary = () => {
  // const [cartItems, setCart] = useState([]);
  const cart = useDataStore((state) => state.cart);
  const isCheckout = useDataStore((state) => state.isCheckout);
  const setIsCheckout = useDataStore((state) => state.setIsCheckout);
  const itemsPrice = useDataStore((state) => state.itemsPrice);

  console.log(cart);
  // let itemsPrice = 0;
  // cart.map((item) => {
  //   itemsPrice += Number(item.price);
  // });

  return (
    <div>
      <Grid container spacing={3} style={{ padding: '25px' }}>
        <Grid item xs={12}>
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
        <Grid item xs={6} styles={{ float: 'right' }}>
          <p>${itemsPrice}</p>
          <p>$2.99</p>
          <p>${itemsPrice + 2.99}</p>
          <p>${(itemsPrice / 100) * 7}</p>
          <b>${((itemsPrice / 100) * 7) + itemsPrice}</b>
        </Grid>
        <Grid item xs={12}>
          {!isCheckout &&
            <Link to="/checkout">
              <Button
                variant="contained"
                style={{backgroundColor: '#5E2EBA', color: 'white'}}
                onClick={() => setIsCheckout(!isCheckout)}
              >
                Proceed to Checkout
              </Button>
            </Link>
          }
          {isCheckout &&
            <Link to="/confirmation">
              <Button
                variant="contained"
                style={{backgroundColor: '#5E2EBA', color: 'white'}}
                onClick={() => setIsCheckout(!isCheckout)}
              >
                Checkout
              </Button>
            </Link>
          }

        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummary;
