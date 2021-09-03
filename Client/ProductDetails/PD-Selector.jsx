import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDataStore from '../zustandStore.js';
import { Redirect, withRouter } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Selector = ({ inventory, product }) => {
  var stockObj = JSON.parse(inventory);
  const [addCart, setAddCart] = useState(true);
  const [isRedirect, setIsRedirect] = useState(false);
  const addToCart = useDataStore((state) => state.addToCart);
  const cart = useDataStore((state) => state.cart);

  const handleAddCart = () => {
    setAddCart(false);
    cart.push(product);
    addToCart(cart);
  };
  //const history = useHistory();
  const handleBuyNow = () => {
    //history.push('/cart');
    setIsRedirect(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="body1" color="black" component="p">
      <select> Select Size
        <option default>Please select...</option>
        {Object.keys(stockObj).map((size, i) => {
          if (stockObj[size] === 0) {
            return <option key={i}>{size} - Sold Out</option>;
          }
          return (
            <option key={i}>{size} - only {stockObj[size]} remaining</option>
          );
        })}
      </select>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </Typography>
      <div className='product-buttons'>
        <span>
          {addCart && <Button
            variant="contained"
            style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
            onClick={handleAddCart}
          >ADD TO CART
          </Button>}
          {!addCart && <Button
            variant="contained"
            style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
            startIcon={<ShoppingBasketIcon />}
            onClick={handleBuyNow}
          >VIEW CART
          </Button>}
        </span>
        <span>
          <Button
            onClick={handleBuyNow}
            variant="contained"
            style={{color: '#5E2EBA', backgroundColor: '#DED1F7'}}
            startIcon={<ShoppingBasketIcon />}
          >
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
              BUY NOW
            </Link>
          </Button>
        </span>
      </div>
      {isRedirect && <Redirect to={{ pathname: '/cart', }}/>}
    </Container>
  );
};

export default withRouter(Selector);
