import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import validator from 'validator';
import axios from 'axios';
import useDataStore from '../zustandStore';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 416,
    margin: 'auto',
  },
});
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

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();
  const setUsername = useDataStore((state) => state.setUserName);
  let username = useDataStore((state) => state.userName);
  let [name, setName] = useState('');
  const classes = useStyles();
  let close = (event) => {
    history.goBack();
  };

  let onSignInSubmit = () => {
    if (isSeller) {
      axios.get(`/sellersignin?sellerEmail=${email}`).then((res) => {
        if (
          res.data === 'User Not Found.' ||
          res.data ===
            'There was an error with your request, Please try again or contact an administrator.'
        ) {
          setLoginError(true);
        } else {
          setLoginError(false);
          setUsername(res.data.sellerName);
          close();
        }
      });
    } else {
      axios.get(`/buyersignin?buyerEmail=${email}`).then((res) => {
        if (
          res.data === 'User Not Found.' ||
          res.data ===
            'There was an error with your request, Please try again or contact an administrator.'
        ) {
          setLoginError(true);
        } else {
          setLoginError(false);
          setUsername(res.data[0].buyerName);
          close();
        }
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
      passLengthValid = !validator.isLength(password, { min: 8, max: 14 });
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
    <Modal open={true} onClose={close} id="sign-in-modal" className="font">
      <Card className={classes.root}>
        <Grid
          container
          spacing={1}
          style={{ backgroundColor: '#fff', margin: 'auto' }}
        >
          <Grid item xs={12}>
            <h2 id="sign-in-greeting">Sign In</h2>
            <p style={{ textAlign: 'center' }}>
              Please sign in in order to post a product or a service. <br /> You
              are one step away from joining your community.
            </p>
          </Grid>
          <Grid item xs={12} id="sign-in-email">
            <CssTextField
              variant="outlined"
              id="custom-css-outlined-input"
              required
              type="email"
              label="email"
              onChange={(event) => {
                handleSetEmail(event);
              }}
              error={emailError}
            />
          </Grid>
          <Grid item xs={12} id="sign-in-password">
            <CssTextField
              variant="outlined"
              id="custom-css-outlined-input"
              required
              className="sign-in-textfield"
              type="password"
              label="password"
              onChange={(event) => {
                handleSetPassword(event);
              }}
              error={passwordError}
            />
          </Grid>
          <Grid item xs={12} id="sign-in-seller-toggle">
            <FormControl>
              <InputLabel>Buyer or Seller?</InputLabel>
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
            <Button
              variant="contained"
              onClick={onSignInSubmit}
              style={{
                backgroundColor: '#5E2EBA',
                color: 'white',
                boxSizing: 'border-box',
                width: '60%',
              }}
              id="sign-in-button"
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p id="sign-in-divider">or</p>
            <Link to="/sign-up">
              <Button
                id="sign-up-button"
                variant="contained"
                style={{
                  backgroundColor: '#DED1F7',
                  boxSizing: 'border-box',
                  width: '60%',
                  textAlign: 'center',
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            {loginError ? (
              <p style={{ color: 'red' }}>
                There was an error signing into your account. Please check your
                account details and try again!
              </p>
            ) : null}
          </Grid>
        </Grid>
      </Card>
    </Modal>
  );
};

export default SignIn;
