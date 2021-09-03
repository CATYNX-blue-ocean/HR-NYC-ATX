import React, { useState } from 'react';
import useStyles from './catCardStyles.js';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useDataStore from '../zustandStore.js';

const CategoryCardServices = function (props) {

  const classes = useStyles();
  const setServiceCategory = useDataStore((state) => state.setServiceCategory);

  const handleServiceCategoryClick = function (e) {
    console.log('this click from Services Category Card');
    console.log(e);
    console.log(e.target.nextElementSibling.children[0].childNodes[0].wholeText);
    setServiceCategory(e.target.nextElementSibling.children[0].childNodes[0].wholeText);
  };

  return (
    <Link style={{ textDecoration: 'none' }} to="/services-by-category">
      <Card
        id={props.key}
        name={props.name}
        style={{height: '30vh', width: '35vh'}}
        onClick={(e) => { handleServiceCategoryClick(e); }}
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
            {props.description.length > 105 ? props.description.slice(0, 105) + '...' : props.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>

  );
};

export default CategoryCardServices;
