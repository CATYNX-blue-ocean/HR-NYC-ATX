import React from 'react';
import Carousel from 'react-elastic-carousel';

import CategoryCardServices from './LP-CategoryCardServices.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ServicesCarousel = function (props) {

  const servicesCategories = useDataStore((state) => state.servicesCategories);

  return (
    <div className="landing-page-category-carousel">
      <div className="see-all-link">
        <a>See All</a>
      </div>
      <Carousel itemsToShow={3} pagination={false}>
        {servicesCategories.map((item) => <CategoryCardServices key={item._id}
          photo={item.image} name={item.category} />)}
      </Carousel>
    </div>
  );

};

export default ServicesCarousel;