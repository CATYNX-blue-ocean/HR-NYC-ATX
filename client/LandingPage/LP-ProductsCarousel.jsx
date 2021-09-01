import React from 'react';
import Carousel from 'react-elastic-carousel';

import ItemCardProducts from './LP-ItemCardProducts.jsx';
import exampleData from '../../exampleData.js';
import useStore from '../zustandStore.js';


const ProductsCarousel = function (props) {

  const handleTestClick = function () {
    console.log('Me clickey');
  };

  return (
    <div className="landing-page-products-carousel">
      <Carousel itemsToShow={3} pagination={false}>
        {exampleData.exampleData.productListings.map((item) => <ItemCardProducts key={item.id}
          photo={item.productImage[0]} name={item.productName} onClick={() => { handleTestClick(); }} />)}
      </Carousel>
    </div>
  );

};

export default ProductsCarousel;