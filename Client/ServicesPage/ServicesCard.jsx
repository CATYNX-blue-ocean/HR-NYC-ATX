import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

//need to make modal pop-up for email click button

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

  //need function to connect service photos to category photos
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
      <CardContent style={{width: '50%', display: 'inline-block', top: '-10%', position: 'relative'}}>
        <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
          {service.serviceName}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {service.serviceDescription}
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
        variant="contained"
        style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
        className={classes.button}
        startIcon={<EmailIcon />}
      >
        Email Me
      </Button>
    </Card>
  );
};

export default ServicesCard;
