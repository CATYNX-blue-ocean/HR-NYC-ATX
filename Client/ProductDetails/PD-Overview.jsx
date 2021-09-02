import React from 'react';
import Images from './PD-Images.jsx';
import Info from './PD-Info.jsx';
import Selector from './PD-Selector.jsx';
import useDataStore from '../zustandStore.js';


const Overview = (props) => {
  console.log(props);
  //to use Zustand instead of props
  const product = useDataStore((state) => state.currentProduct);
  return (
    <div>
      <Images images={product.productImage}/>
      <Info
        name={product.productName}
        description={product.productDescription}
        price={product.price}
        ratings={product.ratings}
      />
      <Selector inventory={product.inventory} product={product}/>
    </div>
  );
};

export default Overview;
