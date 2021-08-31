import React, { useState } from 'react';

const Selector = ({ inventory }) => {
  var stockObj = JSON.parse(inventory);
  const [addCart, setAddCart] = useState(true);
  const handldeAddCart = () => {
    setAddCart(false);
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
        {addCart && <button onClick={handldeAddCart}>ADD TO CART</button>}
        {!addCart && <button>VIEW CART</button>}
      </div>
    </div>
  );
};

export default Selector;
