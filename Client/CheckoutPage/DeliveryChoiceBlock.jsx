import React, { useState } from 'react';
import ShippingChoice from './ShippingForm.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MeetGreet from './MeetGreet.jsx';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '100%',
  },
}));

const DeliveryBlock = () => {
  const classes = useStyles();
  const [shippingToggle, setToggle] = useState(true);

  const toggle = () => {
    setToggle(!shippingToggle);
  };

  // function to change toggle
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={toggle}
            style={{ width: '100%' }}
          >
            SHIPPING ADDRESS
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={toggle}
            style={{ width: '100%' }}
          >
            MEET AND GREET
          </Button>
        </Grid>
      </Grid>

      <div>{shippingToggle === true ? <ShippingChoice /> : <MeetGreet />}</div>
    </div>
  );
};

export default DeliveryBlock;
