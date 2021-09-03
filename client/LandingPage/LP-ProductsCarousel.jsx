import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import CategoryCardProducts from './LP-CategoryCardProducts.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ProductsCarousel = function (props) {

  const setProductCategory = useDataStore((state) => state.setProductCategory);
  const productCategories = useDataStore((state) => state.productCategories);

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
      <h2 className="category-headline">Products</h2>
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
        {productCategories.map((item) => <CategoryCardProducts key={item._id}
          photo={item.image} name={item.category} description={item.description} />)}
      </Carousel>
    </div>
  );

};

export default ProductsCarousel;