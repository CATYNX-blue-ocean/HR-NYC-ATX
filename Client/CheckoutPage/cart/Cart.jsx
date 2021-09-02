import React from 'react';
import CartList from './CartList.jsx';
import OrderSummary from '../order_summary/OrderSummary.jsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import { cart } from '../zustandStore.js';

const Cart = () => {

  return (

    <Container>
      <Grid>
        <h2>Your Cart</h2>
      </Grid>

      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
          style={{
            border: '1px solid #5E2EBA',
            boxSizing: 'border-box',
            borderRadius: '4px',
            padding: '0px',
          }}
        >
          <CartList />
        </Grid>

        <Grid
          item
          xs={5}
          style={{
            border: '1px solid #5E2EBA',
            boxSizing: 'border-box',
            borderRadius: '4px',
            padding: '0px',
          }}
        >
          <OrderSummary />
        </Grid>

      </Grid>
    </Container>

  );
};

export default Cart;