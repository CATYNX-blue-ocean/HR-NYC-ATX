import React from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
import CategoryCardProducts from './LP-CategoryCardProducts.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ProductsCarousel = function (props) {

  const setProductCategory = useDataStore((state) => state.setProductCategory);
  const products = useDataStore((state) => state.productData);

  console.log(products);

  axios.get('http://localhost:3000/landing')
    .then((results) => {
      console.log(results.data);
    })
    .catch((err) => {
      console.error(err);
    });

  const handleSeeAllProductCategoryClick = function () {
    console.log('I was clicked on See All Product Category');
  };

  return (
    <div className="landing-page-category-carousel">
      <div className="see-all-link">
        <a>See All</a>
      </div>
      <Carousel itemsToShow={3} pagination={false} outerSpacing={1}>
        {products.map((item) => <CategoryCardProducts key={item.id}
          photo={item.productImage[0]} name={item.productName} />)}
      </Carousel>
    </div>
  );

};

export default ProductsCarousel;