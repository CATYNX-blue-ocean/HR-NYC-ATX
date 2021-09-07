import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Typography,
  TextField,
} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import useDataStore from '../../zustandStore.js';
import useStyles from './styles.js';

const CartList = () => {
  const classes = useStyles();
  const cart = useDataStore((state) => state.cart);
  const itemsPrice = useDataStore((state) => state.itemsPrice);
  const setItemsPrice = useDataStore((state) => state.setItemsPrice);
  const removeFromCart = useDataStore((state) => state.removeFromCart);
  // const [cartUpdate, toggleCartUpdate] = useState(false);

  // useEffect(() => {}, [cartUpdate]);

  let total = 0;
  cart.map((product) => (total += Number(product.price)));

  useEffect(() => {
    setItemsPrice(total);
  }, []);

  return (
    <Container style={{ padding: '25px' }}>
      <Grid container>
        <Grid item xs={7}>
          <h3>Item</h3>
        </Grid>
        <Grid item xs={3}>
          <h3>Quantity</h3>
        </Grid>
        <Grid item xs={2}>
          <h3>Price</h3>
        </Grid>
      </Grid>

      <Grid container style={{ padding: '25px' }}>
        {cart.map((product) => {
          const [quantity, setQuantity] = useState(1);

          return (
            <Card className={classes.root} key={product.id}>
              <Grid container styles={{ padding: '10px' }}>
                <Grid container item xs={7}>
                  <Grid item xs={5}>
                    <CardMedia
                      className={classes.media}
                      image={product.productImage[0]}
                    />
                  </Grid>
                  <Grid item xs={7} style={{ padding: '10px' }}>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="p"
                      style={{ fontWeight: 'bold', color: 'black' }}
                    >
                      {product.productName}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      component="p"
                      style={{ color: 'black' }}
                    >
                      {product.productCategory}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container item xs={3}>
                  <TextField
                    id="standard-outlined"
                    className={classes.quantity}
                    type="number"
                    variant="outlined"
                    inputProps={{ min: 0, max: 10 }}
                    value={quantity}
                    onChange={(e) => {
                      if (e.target.value > quantity) {
                        setQuantity(e.target.value);
                        setItemsPrice(itemsPrice + Number(product.price));
                      } else if (e.target.value < quantity) {
                        setQuantity(e.target.value);
                        setItemsPrice(itemsPrice - Number(product.price));
                      }
                    }}
                  />
                </Grid>

                <Grid container item xs={2}>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    component="p"
                    style={{ color: 'black' }}
                  >
                    ${(product.price * quantity).toFixed(2)}
                  </Typography>
                </Grid>

                <Grid container item xs={12} justifyContent="flex-end">
                  <Delete id={product.id} onClick={(e) => {
                    const id = e.target.parentElement.id;
                    removeFromCart(id);
                    console.log(cart, 'list');
                    // toggleCartUpdate(!cartUpdate);
                    // console.log(cartUpdate);
                  }}/>
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
