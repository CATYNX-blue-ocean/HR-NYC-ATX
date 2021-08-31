import React from 'react';
import Images from './PD-Images';
import Info from './PD-Info';
import Inventory from './PD-Inventory';

const Overview = (props) => {

  return (
    <div>
      <Images images={props.product.productImage}/>
      <Info
        name={props.product.name}
        description={props.product.productDescription}
        price={props.product.default_price}
        ratings={props.product.ratings}
      />
      <Selector inventory={props.product.inventory}/>
    </div>
  );
};

export default Overview;
