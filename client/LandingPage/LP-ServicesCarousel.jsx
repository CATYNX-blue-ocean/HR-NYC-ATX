import React from 'react';
import Carousel from 'react-elastic-carousel';

import CategoryCardServices from './LP-CategoryCardServices.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ServicesCarousel = function (props) {

  const products = useDataStore((state) => state.productData);
  const services = useDataStore((state) => state.serviceData);

  console.log(services);

  return (
    <div className="landing-page-category-carousel">
      <div className="see-all-link">
        <a>See All</a>
      </div>
      <Carousel itemsToShow={3} pagination={false}>
        {products.map((item) => <CategoryCardServices key={item.id}
          photo={item.productImage[0]} name={item.productName} />)}
      </Carousel>
    </div>
  );

};

export default ServicesCarousel;