import React from 'react';
import DeliveryBlock from './DeliveryChoiceBlock.jsx';
import Grid from '@material-ui/core/Grid';

const Checkout = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3>Your Bag</h3>
        </Grid>
        <Grid item xs={7}>
          <DeliveryBlock />
        </Grid>
        <Grid item xs={5}>
          <h3>Order summarycccc </h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;
