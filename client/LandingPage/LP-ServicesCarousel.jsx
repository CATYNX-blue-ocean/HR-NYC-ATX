import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link, Redirect } from 'react-router-dom';
import CategoryCardServices from './LP-CategoryCardServices.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ServicesCarousel = function (props) {

  const servicesCategories = useDataStore((state) => state.servicesCategories);
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(universities.length);
    }
  };
  return (
    <div className="landing-page-category-carousel">
      <h2 className="category-headline">Services</h2>
      <Link to="/categories">
        <h4 className="see-all-link">See All</h4>
      </Link>
      <Carousel
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
        itemsToShow={3}
        pagination={false}
      >
        {servicesCategories.map((item) => {
          return (
            <CategoryCardServices key={item._id}
              photo={item.image} name={item.category} description={item.description} />
          );
        })}
      </Carousel>
    </div>
  );

};

export default ServicesCarousel;