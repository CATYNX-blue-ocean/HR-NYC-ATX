import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
=======
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import validator from 'validator';
import axios from 'axios';
>>>>>>> 4953e804cff034a2e930cb259c32b336a9988ddd
import {
  Link,
  useHistory
} from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
=======
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [loginError, setLoginError] = useState(false);
>>>>>>> 4953e804cff034a2e930cb259c32b336a9988ddd
  const history = useHistory();

  let close = (event) => {
    history.goBack();
  };

<<<<<<< HEAD
  return (
    <div>
      <Modal
        open={true}
        onClose={close}
      >
        <Grid container spacing={1} style={{backgroundColor: '#fff'}} direction="column" alignItems="center">
=======
  let onSignInSubmit = () => {
    if (isSeller) {
      axios.get(`/sellersignin?sellerEmail=${email}`)
        .then((res) => {
          if (res.data === 'User Not Found.' || 'There was an error with your request, Please try again or contact an administrator.') {
            setLoginError(true);
          } else {
            setLoginError(false);
          }
          console.log(res);
        });
    } else {
      let userInfo = {
        password: password,
        buyerEmail: email,
      };
      axios.get(`/buyersignin?buyerEmail=${email}`)
        .then((res) => {
          if (res.data === 'User Not Found.' || 'There was an error with your request, Please try again or contact an administrator.') {
            setLoginError(true);
          } else {
            setLoginError(false);
          }
          console.log(res);
        });
    }
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

  return (
    <Modal
      open={true}
      onClose={close}
      style={{marginLeft: 25 + '%', width: 50 + '%', marginRight: 25 + '%', top: 100 + 'px'}}
    >
      <Card>
        <Grid
          id='sign-in-modal'
          container spacing={1}
          style={{backgroundColor: '#fff', padding: 20 + 'px'}}
          direction="column"
          alignItems="center"
        >
>>>>>>> 4953e804cff034a2e930cb259c32b336a9988ddd
          <Grid item xs={12}>
            <h2>
              Sign In
            </h2>
            <p>
              Please sign in in order to post a product or a service. <br /> You are one step away from joining your community.
            </p>
          </Grid>
          <Grid item xs={12}>
<<<<<<< HEAD
            <TextField id='sign-in-email' type='email' label='email' onChange={(event) => { setEmail(event.target.value); }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField id='sign-in-password' type='password' label='password' onChange={(event) => { setPassword(event.target.value); }}/>
=======
            <TextField
              required id='sign-in-email'
              type='email' label='email'
              onChange={(event) => { handleSetEmail(event); }}
              error={emailError}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required id='sign-in-password'
              type='password'
              label='password'
              onChange={(event) => { handleSetPassword(event); }}
              error={passwordError}
            />
>>>>>>> 4953e804cff034a2e930cb259c32b336a9988ddd
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel>Buyer or Seller?</InputLabel>
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
            <Button variant='contained' onClick={onSignInSubmit}>Sign In</Button>
          </Grid>
          <Grid item xs={12}>
            <p>
              or
            </p>
            <Link to="/sign-up">
              <Button variant='contained'>Sign Up</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            {loginError ? <p style={{color: 'red'}}>There was an error signing into your account. Please check your account details and try again!</p> : null}
          </Grid>
        </Grid>
      </Card >
    </Modal>
  );
};

export default SignIn;