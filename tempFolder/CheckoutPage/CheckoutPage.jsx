import React from 'react';
import DeliveryBlock from './delivery_choice/DeliveryChoiceBlock.jsx';
import Grid from '@material-ui/core/Grid';
import OrderSummary from './order_summary/OrderSummary.jsx';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    font: 'Helvetica',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Checkout = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} style={{ padding: '25px' }}>
      <Grid item xs={12}>
        <h3>Your Bag</h3>
      </Grid>
      <Grid item xs={7}>
        <Card className={classes.root}>
          <DeliveryBlock />
        </Card>
      </Grid>
      <Grid item xs={5}>
        <OrderSummary />
      </Grid>
    </Grid>
  );
};

export default Checkout;
