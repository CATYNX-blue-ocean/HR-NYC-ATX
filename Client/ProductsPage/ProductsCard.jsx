import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

// const product = {
//   name: 'Product Name',
//   photo: 'https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg',
//   id: '12345',
//   category: 'Product Category',
//   price: '420.69'
// };

const ProductsCard = ({ product }) => {
  const classes = useStyles();

  let reviewAverage = () => {
<<<<<<< HEAD
    const reviewsData = {results: [{rating: 2}, {rating: 5}, {rating: 4}, {rating: 4}, {rating: 2}]};
=======
    let reviewsData = product.ratings || [1, 2, 3, 4, 5, 4, 3, 2];
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

  if (!product.productImage[0]) {
    product.productImage[0] = 'https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg';
  }

  return (
    <Card
<<<<<<< HEAD
      data-myattr={product.id}
=======
      id={product.id}
>>>>>>> 2e0b2e6a7bc4c70e854801a57710b22ce3f5cd86
      onClick={(e) => {
        //changeProduct(e.currentTarget.getAttribute('data-myattr'));

      }}
      className={classes.root}>
      {product.photo ? (
        <CardMedia
          className={classes.media}
          image={product.photo}/>
      ) : (
        <CircularProgress/>
      )}
      <CardContent>
        <>
          <Rating style={{color: '#5E2EBA'}} name="read-only" value={reviewAverage()} readOnly precision={0.25}/>
        </>
        {/* <Typography variant="caption" color="textSecondary" component="p">
          {product.category.toUpperCase()}
        </Typography> */}
        <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
          {product.name}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography align='right' variant="caption" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
				&nbsp;{'$' + product.price.split('.')[0]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductsCard;