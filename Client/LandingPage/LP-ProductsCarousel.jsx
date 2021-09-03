import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Carousel, { consts } from 'react-elastic-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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


  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <ArrowBackIosIcon/> : <ArrowForwardIosIcon/>;
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };

  return (
    <Container style={{ height: '40vh', padding:'3vh' }}>
      <Typography helvetica="true" variant="h5">
        Products
      </Typography>
      <Typography helvetica="true" variant="caption">
        <Link to="/categories" style={{ textDecoration: 'none' }}>
          See more...
        </Link>
      </Typography>
      <Carousel itemsToShow={3} pagination={false} renderArrow={myArrow}>
        {productCategories.map((item) => <CategoryCardProducts key={item._id}
          photo={item.image} name={item.category} description={item.description} />)}
      </Carousel>
    </Container>
  );

};

export default ProductsCarousel;