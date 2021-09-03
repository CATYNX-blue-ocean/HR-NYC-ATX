import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Info = ({ name, price, description, ratings }) => {

  if (!ratings.length) {
    ratings = [3, 3, 4, 5, 5];
  }
  let total = 0;
  for (let i = 0; i < ratings.length; i++) {
    total += ratings[i];
  }
  var avgRating = (total / ratings.length).toFixed(1);
  var avgRating = Number(avgRating);

  return (
    <Container maxWidth="sm" styles={{ float: 'left' }}>
      <Typography
        variant="h5"
        color="textSecondary"
        component="p"
        style={{ fontWeight: 'bold', color: 'black' }}
      >
        {name}
      </Typography>
      <Typography variant="h6" color="black" component="p">
        ${price} USD
        <br />
        <Typography variant="body1" color="black" component="p">
          <span style={{ flexDirection: 'row', width: '50%' }}>
            {description}
          </span>
        </Typography>
      </Typography>
      <Typography variant="body1" color="black" component="p">
        {avgRating.toString().length === 1 ? (avgRating + 1) + '.0' : (avgRating + 1)}
        <Rating style={{color: '#5E2EBA', paddingLeft: '5%', position: 'relative'}} name="half-rating-read" defaultValue={avgRating + 1} precision={0.25} readOnly />
      </Typography>
    </Container>
  );
};

export default Info;
