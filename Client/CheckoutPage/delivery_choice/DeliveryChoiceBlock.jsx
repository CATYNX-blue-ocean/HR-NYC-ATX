import React, { useState } from 'react';
import ShippingChoice from './ShippingForm.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MeetGreet from './MeetGreet.jsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DeliveryBlock = () => {
  const classes = useStyles();
  const [shippingToggle, setToggle] = useState(true);

  const toggle = () => {
    setToggle(!shippingToggle);
  };
  return (
    <div>
      <Card className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#5E2EBA',
                color: 'white',
                width: '100%',
              }}
              onClick={toggle}
            >
              SHIPPING ADDRESS
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#5E2EBA',
                color: 'white',
                width: '100%',
              }}
              onClick={toggle}
            >
              MEET AND GREET
            </Button>
          </Grid>
        </Grid>
      </Card>

      <div>{shippingToggle === true ? <ShippingChoice /> : <MeetGreet />}</div>
    </div>
  );
};

export default DeliveryBlock;
