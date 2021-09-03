import React from 'react';
import { Container, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Carousel, { consts } from 'react-elastic-carousel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, Redirect } from 'react-router-dom';
import CategoryCardServices from './LP-CategoryCardServices.jsx';
import exampleData from '../../exampleData.js';
import useDataStore from '../zustandStore.js';


const ServicesCarousel = function (props) {

  const servicesCategories = useDataStore((state) => state.servicesCategories);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <ArrowBackIosIcon/> : <ArrowForwardIosIcon/>;
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };


  return (
    <div className="landing-page-category-carousel">
      <h2 className="category-headline">Services</h2>
      <Link to="/categories">
        <h4 className="see-all-link">See All</h4>
      </Link>
      <Carousel itemsToShow={3} pagination={false}>
        {servicesCategories.map((item) => {
          return (
            <Link style={{textDecoration: 'none'}} to="/categories">
              <CategoryCardServices key={item._id}
                photo={item.image} name={item.category} description={item.description} />
            </Link>
          );
        })}
      </Carousel>
    </Container>
  );

};

export default ServicesCarousel;