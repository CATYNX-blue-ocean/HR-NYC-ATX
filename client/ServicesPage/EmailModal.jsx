import React, { useState } from 'react';
import { Backdrop, Button, Modal, Paper, TextField } from '@material-ui/core';
import useStyles from './styles.js';
import SendIcon from '@material-ui/icons/Send';

//buttons work, but information doesn't get sent anywhere

const EmailModal = ({ open, handleClose }) => {
  const classes = useStyles();

  const [ emailData, setEmailData ] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const clear = () => {
    setEmailData({
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clear();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Paper className={classes.modalPaper}>
        <form onSubmit={handleSubmit} autoComplete='off' noValidate className={`${classes.modalRoot} ${classes.modalForm}`}>
          <TextField
					  style={{width: '46.5%'}}
            name='your email'
            variant='outlined'
            label='Your Email'
            display='inline-block'
						value={emailData.email}
				    onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
          />
          <TextField
					style={{width: '46.5%'}}
            name='subject'
            variant='outlined'
            label='Subject'
            display='inline-block'
						value={emailData.subject}
				    onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
          />
          <TextField
						multiline={true}
						minRows='10'
            name='message'
            variant='outlined'
            label='Message'
            fullWidth
						value={emailData.message}
				    onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
          />
          <Button startIcon={<SendIcon />} display='inline' style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
            className={classes.button} variant='contained' color='primary' size='large' type='submit'>Submit</Button>
          <Button display='inline' variant='contained' style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
            className={classes.button} color='secondary' size='small' type='reset' onClick={clear}>Clear</Button>
        </form>
      </Paper>
    </Modal>
  );
};

export default EmailModal;
