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

  let close = (event) => {
    history.goBack();
  };

  let checkResponse = (res) => {
    if (res.data === 'There was an error with your request, Please try again or contact an administrator.') {
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
        services: []
      };
      axios.post('/sellersignup', userInfo)
        .then((res) => {
          checkResponse(res);
        });
    } else {
      let userInfo = {
        buyerName: firstName + ' ' + lastName,
        password: password,
        buyerEmail: email,
        buyerPhone: phoneNumber,
        buyerAddress: zipCode,
        orders: []
      };
      axios.post('/buyersignup', userInfo)
        .then((res) => {
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
      passLengthValid = !validator.isLength(password, {min: 8, max: 14});
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
    <Modal
      open={show}
      onClose={close}
      style={{marginLeft: 25 + '%', width: 50 + '%', marginRight: 25 + '%', top: 100 + 'px'}}
      id='sign-up-modal'
    >
      <Card>
        <Grid
          container
          spacing={3}
          style={{backgroundColor: '#fff', padding: 20 + 'px'}}
          direction='column'
        >
          <Grid item xs={12}>
            <h2>
              Sign Up
            </h2>
          </Grid>
          <Grid item xs={12}>
            <TextField required id='sign-up-email' type='email' label='Email' onChange={(event) => { handleSetEmail(event); }} error={emailError}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='sign-up-password'
              type='password'
              size='medium'
              label='Password'
              helperText='Must be between 8-14 alphanumeric characters'
              onChange={(event) => { handleSetPassword(event); }}
              error={passwordError}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField required id='sign-up-firstName' label='First Name' onChange={(event) => { handleFirstNameChange(event); }} error={firstNameError}/>

            <TextField required id='sign-up-lastName' label='Last Name' onChange={(event) => { handleLastNameChange(event); }} error={lastNameError}/>
          </Grid>
          <Grid item xs={12}>
            <TextField required type='tel' id='sign-up-phoneNumber' label='Phone Number' onChange={(event) => { handleSetPhoneNumber(event); }} error={phoneError}/>
          </Grid>
          <Grid item xs={12}>
            <TextField required id='sign-up-zipCode' label='Zip Code' onChange={(event) => { handleZipCodeChange(event); }} error={zipCodeError}/>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel style={{paddingBottom: 10 + 'px'}}>Buyer or Seller?</InputLabel>
              <Select
                id='sign-up-seller-toggle'
                defaultValue='buyer'
                style={{width: 125 + 'px'}}
                onChange={(event) => { setIsSeller(event.target.value === 'buyer' ? false : true); }}
              >
                <MenuItem value='buyer'>Buyer</MenuItem>
                <MenuItem value='seller'>Seller</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {signInError ? <p style={{color: 'red'}}>There was an error creating your account. Please check the account details and try again!</p> : accountExists ? <p style={{color: 'red'}}>The email you used is associated with an account. Please sign in!</p> : accountCreated ? <p>Account created. Please sign in!</p> : null}
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' onClick={() => { onSignUpSubmit(); }}>Sign Up</Button>
          </Grid>
        </Grid>
      </Card>
    </Modal>
  );
};

export default SignUp;