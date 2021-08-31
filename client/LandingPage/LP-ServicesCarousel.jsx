import React from 'react';
import Carousel from 'react-elastic-carousel';

import ItemCardProducts from './LP-ItemCardProducts.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';

//const products = useDataStore((state) => state.productData);
//const services = useDataStore((state) => state.serviceData);



const ServicesCarousel = function () {

  return (
    <div className="landing-page-services-carousel">
      <Carousel itemsToShow={3} pagination={false}>
        {exampleData.exampleData.productListings.map((item) => <ItemCardProducts key={item.id}
          photo={item.productImage} name={item.productName} onClick={() => { console.log('Me clickey'); }} />)}
      </Carousel>
    </div>

  );

};

export default ServicesCarousel;