import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const ShippingInfoForm = (props) => {
  const [values, setValues] = useState({
    fistName: '',
    lastName: '',
    adress: '',
    city: '',
    zipCode: '',
  });
  const classes = useStyles();

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const onSumbit = () => {
    console.log('form side data', values);
    props.submitData(values);
  };

  return (
    <div>
      <h3>Enter your details</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            onChange={set('fistName')}
            value={values.fistName}
            required
            id="outlined-required"
            label="Fist Name"
            defaultValue="Fist Name"
            variant="outlined"
            size="small"
          />
          <TextField
            onChange={set('lastName')}
            value={values.lastName}
            required
            id="outlined-required"
            label="Last Name"
            defaultValue="Last Name"
            variant="outlined"
            size="small"
          />
          <TextField
            onChange={set('adress')}
            value={values.adress}
            // style={{ width: '50%' }}
            required
            id="outlined-required"
            label="Address"
            defaultValue="Address"
            variant="outlined"
            size="small"
          />
          <br />
          <TextField
            onChange={set('city')}
            value={values.city}
            required
            id="outlined-required"
            label="City"
            defaultValue="City"
            variant="outlined"
            size="small"
          />
          <TextField
            onChange={set('zipCode')}
            value={values.zipCode}
            required
            id="outlined-required"
            label="Zip Code"
            defaultValue="Zip Code"
            variant="outlined"
            size="small"
          />
        </div>
        <Button onClick={onSumbit}>Save</Button>
      </form>
    </div>
  );
};

export default ShippingInfoForm;
