import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import validator from 'validator';
import { useHistory } from 'react-router-dom';

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

  let close = (event) => {
    history.goBack();
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

  const validationEmail = (email) => {
    let emailRes = false;
    if (email !== '') {
      emailRes = !validator.isEmail(email);
      setEmailError(emailRes);
    }
  };
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
    validationEmail(event.target.value);
  };

  const validationPassword = (password) => {
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
    validationPassword(event.target.value);
  };

  const validationZipCode = (zipCode) => {
    let zipRes = false;
    if (zipCode !== '') {
      zipRes = !validator.isPostalCode(zipCode, 'any');
      setZipCodeError(zipRes);
    }
  };
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    validationZipCode(event.target.value);
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
    <div>
      <Modal
        open={show}
        onClose={close}
      >
        <Grid container spacing={3} style={{backgroundColor: '#fff'}} direction='column' alignItems='center'>
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
            <Button variant='contained'>Sign Up</Button>
          </Grid>
        </Grid>
      </Modal>
    </div >
  );
};

export default SignUp;