import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Info = ({ name, price, description, ratings }) => {
  let total = 0;
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i];
  }
  var avgRating = (total / ratings.length).toFixed(2);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
          {name}
        </Typography>
        <Typography variant="body1" color="black" component="p">
        <h4>${price} USD</h4>
      <h5>{description}</h5>
        </Typography>

        <Typography alignItems='' variant="body1" color="black" component="p">
        <h4>{avgRating}</h4>
        <Rating style={{color: '#5E2EBA', paddingLeft: '5%'}} name="half-rating-read" defaultValue={avgRating} precision={0.25} readOnly />
        </Typography>
    </Container>
  );
};


export default Info;
