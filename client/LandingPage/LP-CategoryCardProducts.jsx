import React, { useState } from 'react';
import useStyles from './catCardStyles.js';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useDataStore from '../zustandStore.js';

const CategoryCardProducts = function (props) {

  const classes = useStyles();
  const setProductCategory = useDataStore((state) => state.setProductCategory);

  const handleProductCategoryClick = function (e) {
    console.log('this click from Product Category Card');
    console.log(e);
    console.log(e.target.nextElementSibling.children[0].childNodes[0].wholeText);
  };

  return (
    <Link style={{ textDecoration: 'none' }} to="/categories">
      <Card
        id={props.key}
        name={props.name}
        onClick={(e) => { handleProductCategoryClick(e); }}
        className={classes.root}>
        {props.photo ? (
          <CardMedia
            className={classes.media}
            image={props.photo} />
        ) : (
          <CircularProgress />
        )}
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p" style={{ fontWeight: 'bold', color: 'black' }}>
            {props.name}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {props.description.length > 50 ? props.description.slice(0, 50) + '...' : props.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCardProducts;
