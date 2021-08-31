import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useDataStore from './tempZustand.js';

// const product = {
//   name: 'Product Name',
//   photo: 'https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg',
//   id: '12345',
//   category: 'Product Category',
//   price: '420.69'
// };

const ProductsCard = ({ product }) => {
  const classes = useStyles();

  const setCurrentProduct = useDataStore((state) => state.setCurrentProduct);
  const currentProduct = useDataStore((state) => state.currentProduct);

  let reviewAverage = () => {
    const reviewsData = {results: [{rating: 2}, {rating: 5}, {rating: 4}, {rating: 4}, {rating: 2}]};
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
      data-myattr={product.id}
      value={product.id}
      id={product.id}
      name={product.id}
      onClick={(e) => {
        console.log(e.target.parentElement.id);
        setCurrentProduct(e.target.parentElement.id);
      }}
      className={classes.root}>
      {product.productImage ? (
        <CardMedia
          className={classes.media}
          image={product.productImage[0]}/>
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
          {product.productName}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {product.productDescription.length > 105 ? product.productDescription.slice(0, 105) + '...' : product.productDescription}
        </Typography>
        <Typography align='right' variant="caption" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
				&nbsp;{'$' + product.price.split('.')[0]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductsCard;