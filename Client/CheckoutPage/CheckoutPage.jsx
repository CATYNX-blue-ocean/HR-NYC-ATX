import React from 'react';
import DeliveryBlock from './delivery_choice/DeliveryChoiceBlock.jsx';
import Grid from '@material-ui/core/Grid';
import OrderSummary from './order_summary/OrderSummary.jsx';
const Checkout = () => {
  return (
    <div>
      <Grid container spacing={3} style={{ padding: '25px' }}>
        <Grid item xs={12}>
          <h3>Your Bag</h3>
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
          <DeliveryBlock />
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            border: '1px solid #5E2EBA',
            boxSizing: 'border-box',
            borderRadius: '4px',
            // padding: '0px',
          }}
        >
          <OrderSummary />
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;
