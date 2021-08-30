import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import {
  Link,
  useHistory
} from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  let close = (event) => {
    history.goBack();
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={close}
      >
        <Grid container spacing={1} style={{backgroundColor: '#fff'}} direction="column" alignItems="center">
          <Grid item xs={12}>
            <h3>
              Sign In
            </h3>
            <p>
              Please sign in in order to post a product or a service. <br /> You are one step away from joining your community.
            </p>
          </Grid>
          <Grid item xs={12}>
            <TextField id='sign-in-email' type='email' label='email' onChange={(event) => { setEmail(event.target.value); }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField id='sign-in-password' type='password' label='password' onChange={(event) => { setPassword(event.target.value); }}/>
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