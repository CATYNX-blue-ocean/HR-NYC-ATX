import React from 'react';
import Carousel from 'react-elastic-carousel';

import CategoryCardServices from './LP-CategoryCardServices.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ServicesCarousel = function (props) {

  const servicesCategories = useDataStore((state) => state.servicesCategories);

  return (
    <div className="landing-page-category-carousel">
      <h2 className="category-headline">Services</h2>
      <a className="see-all-link">See All</a>
      <Carousel itemsToShow={3} pagination={false}>
        {servicesCategories.map((item) => <CategoryCardServices key={item._id}
          photo={item.image} name={item.category} description={item.description} />)}
      </Carousel>
    </div>
  );

};

export default ServicesCarousel;