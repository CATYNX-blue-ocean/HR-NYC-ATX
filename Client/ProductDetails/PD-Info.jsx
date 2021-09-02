import React from 'react';
import Rating from '@material-ui/lab/Rating';
//import Typography from '@material-ui/core/Typography';

const Info = (props) => {
  let total = 0;
  for (let i = 0; i < props.ratings.length; i++) {
    total += props.ratings[i];
  }
  var avgRating = (total / props.ratings.length).toFixed(2);

  return (
    <div>
      <h4>{props.name}</h4>
      <h4>${props.price} USD</h4>
      <h6>{props.description}</h6>
      <span className="star-sum">{avgRating} </span>
      <Rating name="half-rating-read" defaultValue={avgRating} precision={0.25} readOnly />
    </div>
  );
};


export default Info;
