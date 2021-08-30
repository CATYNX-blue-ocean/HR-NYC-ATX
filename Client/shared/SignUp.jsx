import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

  let close = (event) => {
    history.goBack();
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
            <TextField id='sign-up-email' type='email' label='email' onChange={(event) => { setEmail(event.target.value); }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField id='sign-up-password' type='password' label='password' onChange={(event) => { setPassword(event.target.value); }}/>
          </Grid>
          <Grid item xs={6}>
            <TextField id='sign-up-firstName' label='First Name' onChange={(event) => { setFirstName(event.target.value); }}/>

            <TextField id='sign-up-lastName' label='Last Name' onChange={(event) => { setLastName(event.target.value); }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField id='sign-up-phoneNumber' label='Phone Number' onChange={(event) => { setPhoneNumber(event.target.value); }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField id='sign-up-zipCode' label='Zip Code' onChange={(event) => { setZipCode(event.target.value); }}/>
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