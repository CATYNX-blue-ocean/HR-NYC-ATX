import React, { useState } from 'react';
import useStyles from './styles.js';
import { Backdrop, Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, CircularProgress, Grid, Fade, IconButton, Modal, Paper, TextField, Typography} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import EmailModal from './EmailModal.jsx';

//need function to connect service photos to category photos

const ServicesCard = ({ service }) => {
  const classes = useStyles();

  let reviewAverage = () => {
    const reviewsData = service.ratings || [1, 2, 3, 4, 5, 4, 3, 2];
    let sum = 0;
    reviewsData.forEach(result => {
      sum += result;
    });
    return Number((sum / (reviewsData.length)).toFixed(1));
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      data-myattr={service.id}
      className={classes.root}>
      {service ? (
        <CardMedia
          className={classes.media}
          image={'https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg'}/>
      ) : (
        <CircularProgress/>
      )}
      <CardContent style={{width: '50%', display: 'inline-block', top: '-5%', position: 'relative'}}>
        <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
          {service.serviceName}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {service.serviceDescription.length > 45 ? service.serviceDescription.slice(0, 45) + '...' : service.serviceDescription}
        </Typography>
      </CardContent>
      <>
        <Typography align='right' variant="body1" color="textSecondary" component="p" style={{paddingLeft: '5%', display: 'inline-block', fontWeight: 'bold', color: 'black', left: '5%', paddingRight: '15%'}}>
				Average Review
        </Typography>
        <Rating style={{color: '#5E2EBA', top: '1%', paddingRight: '5%'}} name="read-only" value={reviewAverage()} readOnly precision={0.25}/>
        <Typography variant="body1" color="textSecondary" component="p" style={{textAlign: 'right', fontWeight: 'bold', color: 'black', display: 'inline', position: 'relative', top: '0%'}}>
          {reviewAverage()}
        </Typography>
      </>
      <br/>
      <br/>
      <Typography align='right' variant="body1" color="textSecondary" component="p" style={{textAlign: 'left', paddingLeft: '5%', display: 'inline-block', fontWeight: 'bold', color: 'black', left: '5%', paddingRight: '15%'}}>
				Rates
        <br/>
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p" style={{textAlign: 'left', paddingLeft: '5%'}}>
			I can do this
        <br/>
				And this
        <br/>
				And this too
        <br/>
      </Typography>
      <hr style={{marginLeft: '5%', marginRight: '5%'}}/>
      <br/>
      <Typography align='right' variant="body1" color="textSecondary" component="p" style={{paddingLeft: '5%', display: 'inline-block', fontWeight: 'bold', color: 'black', left: '5%', paddingRight: '15%'}}>
				Time Available
      </Typography>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
        className={classes.button}
        startIcon={<EmailIcon />}
      >
        Email Me
      </Button>
      {open ? <EmailModal open={open} handleClose={handleClose}/> : null}
    </Card>
  );
};

export default ServicesCard;
