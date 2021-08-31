import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import validator from 'validator';
import {
  Link,
  useHistory
} from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();

  let close = (event) => {
    history.goBack();
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
    <div>
      <Modal
        open={true}
        onClose={close}
      >
        <Grid container spacing={1} style={{backgroundColor: '#fff'}} direction="column" alignItems="center">
          <Grid item xs={12}>
            <h2>
              Sign In
            </h2>
            <p>
              Please sign in in order to post a product or a service. <br /> You are one step away from joining your community.
            </p>
          </Grid>
          <Grid item xs={12}>
            <TextField required id='sign-in-email' type='email' label='email' onChange={(event) => { handleSetEmail(event); }} error={emailError}/>
          </Grid>
          <Grid item xs={12}>
            <TextField required id='sign-in-password' type='password' label='password' onChange={(event) => { handleSetPassword(event); }} error={passwordError}/>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained'>Sign In</Button>
          </Grid>
          <Grid item xs={12}>
            <p>
              or
            </p>
            <Link to="/sign-up">
              <Button variant='contained'>Sign Up</Button>
            </Link>
          </Grid>
        </Grid>
      </Modal>
    </div >
  );
};

export default SignIn;