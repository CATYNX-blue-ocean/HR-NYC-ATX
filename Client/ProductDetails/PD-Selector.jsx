import React from 'react';

const Selector = ({ inventory }) => {
  var stockObj = JSON.parse(inventory);

  return (
    <div>
      <select> Select Size
        {Object.keys(stockObj).map((size, i) => {
          return (
            <option key={i}>{size}</option>
          )
        })}
      </select>
    </div>
  );
};

export default Selector;
