import React from 'react';
import ItemSummary from './ItemSummary.jsx';
import OrderSummary from './order_summary/OrderSummary.jsx';
import Grid from '@material-ui/core/Grid';
// import { cart } from '../zustandStore.js';

const Cart = () => {

  return (

    <Grid container spacing={2}>
      <Grid xs={12}>
        <h2>Your Cart</h2>
      </Grid>
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
        <ItemSummary />
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

  );
};