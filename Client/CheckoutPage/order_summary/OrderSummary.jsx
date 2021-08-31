import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

const OrderSummary = () => {
  const [cartItems, setCart] = useState([]);
  return (
    <div>
      <Grid container spacing={3} style={{ padding: '25px' }}>
        <Grid item xs={12}>
          <h3>Order Summary</h3>
          <h3>{cartItems.length} Items</h3>
        </Grid>
        <Grid item xs={6}>
          <p>names</p>
        </Grid>
        <Grid item xs={6}>
          <p>prices </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummary;
