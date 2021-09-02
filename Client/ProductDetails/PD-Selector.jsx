import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useDataStore from '../zustandStore.js';

const Selector = ({ inventory, product }) => {
  var stockObj = JSON.parse(inventory);
  const [addCart, setAddCart] = useState(true);
  const addToCart = useDataStore((state) => state.addToCart);
  const handleAddCart = () => {
    setAddCart(false);
    addToCart(product);
  };
  const history = useHistory();
  const handleBuyNow = () => {
    history.push('/cart');
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
    </div>
  );
};

export default Selector;
