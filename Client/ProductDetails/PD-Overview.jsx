import React from 'react';
import Images from './PD-Images.jsx';
import Info from './PD-Info.jsx';
import Selector from './PD-Selector.jsx';



const Overview = (props) => {
  console.log(props);
  return (
    <div>
      <Images images={props.product.productImage}/>
      <Info
        name={props.product.productName}
        description={props.product.productDescription}
        price={props.product.price}
        ratings={props.product.ratings}
      />
      <Selector inventory={props.product.inventory}/>
    </div>
  );
};

export default Overview;
