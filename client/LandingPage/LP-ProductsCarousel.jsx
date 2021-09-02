import React from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import CategoryCardProducts from './LP-CategoryCardProducts.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ProductsCarousel = function (props) {

  const setProductCategory = useDataStore((state) => state.setProductCategory);
  const productCategories = useDataStore((state) => state.productCategories);

  const handleSeeAllProductCategoryClick = function () {
    console.log('I was clicked on See All Product Categories');
  };

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
      <div className="see-all-link">
        <a>See All</a>
      </div>
      <Carousel
        itemsToShow={3}
        pagination={false}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {productCategories.map((item) => <CategoryCardProducts key={item._id}
          photo={item.image} name={item.category} description={item.description} />)}
      </Carousel>
    </div>
  );

};

export default ProductsCarousel;