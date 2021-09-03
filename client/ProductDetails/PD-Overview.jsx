import React from 'react';
import Images from './PD-Images.jsx';
import Info from './PD-Info.jsx';
import Selector from './PD-Selector.jsx';
import { useLocation } from 'react-router-dom';
import useDataStore from '../zustandStore.js';

const Overview = (props) => {

  const currentProduct = useDataStore((state) => state.currentProduct);

  console.log('this is current product', currentProduct);

  return (
    <div>
      <Images images={currentProduct.productImage} />
      <Info
        name={currentProduct.productName}
        description={currentProduct.productDescription}
        price={currentProduct.price}
        ratings={currentProduct.ratings}
      />
      <Selector inventory={currentProduct.inventory} />
    </div>
  );
};

export default Overview;
