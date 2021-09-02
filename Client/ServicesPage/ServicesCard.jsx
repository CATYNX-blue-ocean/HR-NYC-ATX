import React, { useState } from 'react';
import useStyles from './styles.js';
import { Backdrop, Button, Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, CircularProgress, Grid, Fade, IconButton, Modal, Paper, TextField, Typography} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import EmailIcon from '@material-ui/icons/Email';
import EmailModal from './EmailModal.jsx';

const serviceCategories = [
  ['Delivery Service', 'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Delivery-Service.jpg'],
  ['Furniture Assembly', 'https://blog.puls.com/hs-fs/hubfs/puls-furnture-assembly-services-included.jpg?width=2400&name=puls-furnture-assembly-services-included.jpg'],
  ['General Cleaning', 'https://insights.workwave.com/wp-content/uploads/2020/05/cleaning-lady-with-a-bucket-and-cleaning-products-picture-id870219332.jpg'],
  ['Heavy Lifting', 'https://denverpromovers.com/wp-content/uploads/2021/03/D1ew.jpg'],
  ['Help Moving', 'https://www.movinghelp.com/image/profile/61910'],
  ['Home Repairs', 'https://ca-times.brightspotcdn.com/dims4/default/2899176/2147483647/strip/true/crop/1800x1190+0+0/resize/840x555!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4a%2F08%2F2c894d17453995bc900b87e8645d%2Fhome-repairs-clip-art.jpg'],
  ['Personal Assistant', 'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,h_217,w_366/v1574202751/hedmk9v0cvs1nsk97ewh.jpg'],
  ['Spring Cleaning', 'http://www.thenewpotato.com/wp-content/uploads/2015/08/0712-cher-horowitz-clueless-closet_fa-620x360.jpg?x94818']
];

const ServicesCard = ({ service }) => {
  const classes = useStyles();

  let reviewAverage = () => {
    let reviewsData = service.ratings || [1, 2, 3, 4, 5, 5, 5, 5];
    if (reviewsData.length === 0) {
      reviewsData = [1, 2, 3, 4, 5, 4, 3, 2];
    }
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

  let photo;
  serviceCategories.forEach((category, key) => {
    console.log('category: ', category);
    console.log('key', key);
    if (service.serviceCategory === category[0]) {
      photo = category[1];
    }
  });

  return (
    <Card
      data-myattr={service.id}
      className={classes.root}>
      {service ? (
        <CardMedia
          className={classes.media}
          image={photo}/>
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
