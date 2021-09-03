import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import validator from 'validator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    width: '80%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#DED1F7',
      },
      '&:hover fieldset': {
        borderColor: '#5E2EBA',
      },
      '&.Mui-focused fieldset': {
        borderColor: '5E2EBA',
      },
    },
  },
})(TextField);

const SignUp = () => {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneError, setErrorPhoneNumber] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [signInError, setSignInError] = useState(false);
  const [accountExists, setAccountExists] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const classes = useStyles();

  let close = (event) => {
    history.goBack();
  };

  let checkResponse = (res) => {
    if (
      res.data ===
      'There was an error with your request, Please try again or contact an administrator.'
    ) {
      setSignInError(true);
    } else if (res.data === 'Account Exists. Please log in.') {
      setAccountExists(true);
    } else if (res.data === 'Account Created. Please log in.') {
      setAccountCreated(true);
    }
  };

  const onSignUpSubmit = () => {
    if (isSeller) {
      let userInfo = {
        sellerName: firstName + ' ' + lastName,
        sellerEmail: email,
        sellerAddress: zipCode,
        location: [],
        sellerPhone: phoneNumber,
        password: password,
        createdAt: new Date(),
        orders: [],
        products: [],
        services: [],
      };
      axios.post('/sellersignup', userInfo).then((res) => {
        checkResponse(res);
      });
    } else {
      let userInfo = {
        buyerName: firstName + ' ' + lastName,
        password: password,
        buyerEmail: email,
        buyerPhone: phoneNumber,
        buyerAddress: zipCode,
        orders: [],
      };
      axios.post('/buyersignup', userInfo).then((res) => {
        checkResponse(res);
      });
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    let res = false;
    if (phoneNumber !== '') {
      res = !validator.isMobilePhone(phoneNumber);
      setErrorPhoneNumber(res);
    }
    return res;
  };
  const handleSetPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    validatePhoneNumber(event.target.value);
  };

  const validateEmail = (email) => {
    let emailRes = false;
    if (email !== '') {
      emailRes = !validator.isEmail(email);
      setEmailError(emailRes);
    }
  };
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const validatePassword = (password) => {
    let passLengthValid = false;
    let passCharsValid = false;
    if (password !== '') {
      passLengthValid = !validator.isLength(password, { min: 8, max: 14 });
      console.log(passLengthValid);
    }
    if (password !== '') {
      passCharsValid = !validator.isAlphanumeric(password);
    }
    if (passLengthValid || passCharsValid) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const handleSetPassword = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const validateZipCode = (zipCode) => {
    let zipRes = false;
    if (zipCode !== '') {
      zipRes = !validator.isPostalCode(zipCode, 'any');
      setZipCodeError(zipRes);
    }
  };
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    validateZipCode(event.target.value);
  };

  const validateFirstName = (name) => {
    let firstNameRes = false;
    if (name !== '') {
      firstNameRes = !validator.isAlpha(name);
      setFirstNameError(firstNameRes);
    }
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    validateFirstName(event.target.value);
  };

  const validateLastName = (name) => {
    let lastNameRes = false;
    if (name !== '') {
      lastNameRes = !validator.isAlpha(name);
      setLastNameError(lastNameRes);
    }
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    validateLastName(event.target.value);
  };

  return (
    <Modal open={show} onClose={close} id="sign-up-modal" className="font">
      <Card>
        <Grid
          container
          spacing={3}
          style={{ backgroundColor: '#fff' }}
          direction="column"
        >
          <Grid item xs={12}>
            <h2 id="sign-up-header">Sign Up</h2>
          </Grid>
          <Grid item xs={12} id="sign-up-email">
            <CssTextField
              variant="outlined"
              id="custom-css-outlined-input"
              required
              type="email"
              label="Email"
              onChange={(event) => {
                handleSetEmail(event);
              }}
              error={emailError}
            />
          </Grid>
          <Grid item xs={12} id="sign-up-password">
            <CssTextField
              variant="outlined"
              id="custom-css-outlined-input"
              required
              type="password"
              size="medium"
              label="Password"
              helperText="Must be between 8-14 alphanumeric characters"
              onChange={(event) => {
                handleSetPassword(event);
              }}
              error={passwordError}
            />
          </Grid>
          <Grid item xs={12} id="sign-up-name">
            <Grid item xs={6} style={{ marginLeft: '10%' }}>
              <CssTextField
                variant="outlined"
                id="custom-css-outlined-input"
                required
                label="First Name"
                onChange={(event) => {
                  handleFirstNameChange(event);
                }}
                error={firstNameError}
              />
            </Grid>
            <Grid item xs={6} style={{ marginRight: '1%' }}>
              <CssTextField
                variant="outlined"
                id="custom-css-outlined-input"
                required
                id="sign-up-lastName"
                label="Last Name"
                onChange={(event) => {
                  handleLastNameChange(event);
                }}
                error={lastNameError}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} id="sign-up-phoneNumber">
            <CssTextField
              variant="outlined"
              id="custom-css-outlined-input"
              required
              type="tel"
              label="Phone Number"
              onChange={(event) => {
                handleSetPhoneNumber(event);
              }}
              error={phoneError}
            />
          </Grid>
          <Grid item xs={12} id="sign-up-zipCode">
            <CssTextField
              variant="outlined"
              id="custom-css-outlined-input"
              required
              label="Zip Code"
              onChange={(event) => {
                handleZipCodeChange(event);
              }}
              error={zipCodeError}
            />
          </Grid>
          <Grid item xs={12} id="sign-up-seller-toggle">
            <FormControl>
              <InputLabel style={{ paddingBottom: 10 + 'px' }}>
                Buyer or Seller?
              </InputLabel>
              <Select
                defaultValue="buyer"
                style={{ width: 125 + 'px' }}
                onChange={(event) => {
                  setIsSeller(event.target.value === 'buyer' ? false : true);
                }}
              >
                <MenuItem value="buyer">Buyer</MenuItem>
                <MenuItem value="seller">Seller</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {signInError ? (
              <p style={{ color: 'red' }}>
                There was an error creating your account. Please check the
                account details and try again!
              </p>
            ) : accountExists ? (
              <p style={{ color: 'red' }}>
                The email you used is associated with an account. Please sign
                in!
              </p>
            ) : accountCreated ? (
              <p>Account created. Please sign in!</p>
            ) : null}
          </Grid>
          <Grid item xs={12} id="sign-up-modal-button">
            <Button
              style={{
                backgroundColor: '#5E2EBA',
                color: 'white',
                margin: '10px',
              }}
              variant="contained"
              onClick={() => {
                onSignUpSubmit();
              }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Modal>
  );
};

export default SignUp;
