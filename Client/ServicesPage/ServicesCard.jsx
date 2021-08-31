import React, { useState } from 'react';
import useStyles from './styles.js';
import { Backdrop, Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, CircularProgress, Grid, Fade, IconButton, Modal, Paper, TextField, Typography} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import EmailModal from './EmailModal.jsx';

<<<<<<< HEAD
=======
//need function to connect service photos to category photos

>>>>>>> ccc8d45aead5cfb3c3c61029324e16ab0e2ffdb6
const ServicesCard = ({ service }) => {
  const classes = useStyles();

  let reviewAverage = () => {
<<<<<<< HEAD
    const reviewsData = {results: [{rating: 2}, {rating: 5}, {rating: 4}, {rating: 4}, {rating: 2}]};
=======
    let reviewsData = service.ratings || [1, 2, 3, 4, 5, 5, 5, 5];
    if (reviewsData.length === 0) {
      reviewsData = [1, 2, 3, 4, 5, 4, 3, 2];
    }
>>>>>>> ccc8d45aead5cfb3c3c61029324e16ab0e2ffdb6
    let sum = 0;
    reviewsData.results.forEach(result => {
      sum += result.rating;
    });
    return sum / (reviewsData.results.length);
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
      onClick={(e) => {
        //changeProduct(e.currentTarget.getAttribute('data-myattr'));

      }}
      className={classes.root}>
      {service.photo ? (
        <CardMedia
          className={classes.media}
          image={service.photo}/>
      ) : (
        <CircularProgress/>
      )}
<<<<<<< HEAD
      <CardContent style={{width: '50%', display: 'inline-block', top: '-10%', position: 'relative'}}>
        {/* <Typography variant="caption" color="textSecondary" component="p">
          {product.category.toUpperCase()}
        </Typography> */}
=======
      <CardContent style={{width: '50%', display: 'inline-block', top: '-5%', position: 'relative'}}>
>>>>>>> ccc8d45aead5cfb3c3c61029324e16ab0e2ffdb6
        <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
          {service.name}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
<<<<<<< HEAD
          {service.description}
=======
          {service.serviceDescription.length > 45 ? service.serviceDescription.slice(0, 45) + '...' : service.serviceDescription}
>>>>>>> ccc8d45aead5cfb3c3c61029324e16ab0e2ffdb6
        </Typography>
      </CardContent>
      <>
        <Typography align='right' variant="body1" color="textSecondary" component="p" style={{paddingLeft: '5%', display: 'inline-block', fontWeight: 'bold', color: 'black', left: '5%', paddingRight: '15%'}}>
				Average Review
        </Typography>
        <Rating style={{color: '#5E2EBA', top: '1%', paddingRight: '5%'}} name="read-only" value={reviewAverage()} readOnly precision={0.25}/>
        <Typography variant="body1" color="textSecondary" component="p" style={{textAlign: 'right', fontWeight: 'bold', color: 'black', display: 'inline', position: 'relative', top: '0%'}}>
          {reviewAverage().toString().length === 1 ? reviewAverage() + '.0' : reviewAverage()}
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