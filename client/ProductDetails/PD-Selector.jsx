import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDataStore from '../zustandStore.js';
import { Redirect, withRouter } from 'react-router-dom';

const Selector = ({ inventory, product }) => {
  //JSON.parse cannot parse single quotes...only double...this loop fixes that -NK
  let newInventory = '';
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === `'`) {
      newInventory += `"`;
      continue;
    } else {
      newInventory += inventory[i];
    }
  }
  var stockObj = JSON.parse(newInventory);
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
    <div>
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
      <div className='product-buttons'>
        <span>
          {addCart && <button onClick={handleAddCart}>ADD TO CART</button>}
          {!addCart && <button onClick={handleBuyNow}>VIEW CART</button>}
        </span>
        <span>
          <button onClick={handleBuyNow}>BUY NOW</button>
        </span>
      </div>
      {isRedirect && <Redirect to={{ pathname: '/cart', }} />}
    </div>
  );
};

export default withRouter(Selector);
