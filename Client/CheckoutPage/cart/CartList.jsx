import React from 'react';
import { Grid, Paper, Card, CardHeader, CardContent, CardMedia, Container, Typography, TextField } from '@material-ui/core';

// import {cart} from '../zustandStore.js';
import fakeCart from '../fakeCart.js';
import useStyles from './styles.js';


const CartList = () => {

  const cart = fakeCart;
  const classes = useStyles();

  return (
    <Container>
      <Grid container>

        <Grid item xs={7}>
          <Paper elevation={2}>
            <h3>Item</h3>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={2}>
            <h3>Quantity</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={2}>
            <h3>Price</h3>
          </Paper>
        </Grid>

      </Grid>

      <Grid container>

        {cart.map((product) => {
          return (
            <Card
              className={classes.root}
              key={product.id}
            >
              <Grid container>

                <Grid item xs={7}>
                  <Grid>
                    <CardMedia
                      className={classes.media}
                      image={product.productImage[0]}
                    />
                  </Grid>
                  <Grid style={{padding: '10px'}}>
                    <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
                      {product.productName}
                    </Typography>
                    <Typography color="textSecondary" component="p" style={{color: 'black'}}>
                      {product.productCategory}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    id="standard-outlined"
                    className={classes.quantity}
                    type="number"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={2}>
                  <Typography variant="h6" color="textSecondary" component="p" style={{color: 'black'}}>
                    {product.price}
                  </Typography>
                </Grid>

              </Grid>
            </Card>
          );
        })}

      </Grid>
    </Container>
  );
};

export default CartList;