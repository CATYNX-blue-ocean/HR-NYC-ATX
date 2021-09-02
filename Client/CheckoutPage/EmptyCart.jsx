import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Container, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useStyles from './styles.js';
import NavBar from '../shared/NavBar.jsx';
import useDataStore from '../zustandStore.js';
import EmptyCartProductsCard from './EmptyCartCards.jsx';

const sadBag = 'https://i1.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1';

const randomizeProductsShown = (products, numOfProdsShown) => {
  const max = products.length - numOfProdsShown;
  return Math.floor(Math.random() * max);
};

const numberOfProdsShown = 4;

const EmptyCart = () => {

  const classes = useStyles();

  let products = useDataStore((state) => state.productData);
  const index = randomizeProductsShown(products, numberOfProdsShown);
  products = products.slice(index, index + numberOfProdsShown);

  return (
    <Container maxwidth='lg'>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={sadBag}/>
      </div>
      <br/>
      <Button
        // onClick={handleOpen}
        variant="contained"
        style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
        className={classes.button}
        startIcon={<ShoppingBasketIcon />}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
        SHOP NOW
        </Link>
      </Button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{marginLeft: '2%'}}>
        <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: '#5E2EBA'}}>
          YOU MIGHT LIKE TO LOOK AT
        </Typography>
      </div>
      <br/>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            {products.map((product, i) => (
              <Grid item key={i} xs={3} >
                <EmptyCartProductsCard product={product}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default EmptyCart;
