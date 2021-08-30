import React, { useState } from 'react';
import ShippingChoice from './ShippingForm.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MeetGreet from './MeetGreet.jsx';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
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
      <h3>Delivery block</h3>
      <div>
        <Button variant="contained" color="primary" onClick={toggle}>
          SHIPPING ADDRESS
        </Button>
        <Button variant="contained" color="primary" onClick={toggle}>
          MEET AND GREET
        </Button>
        {shippingToggle === true ? <ShippingChoice /> : <MeetGreet />}
      </div>
    </div>
  );
};

export default DeliveryBlock;
