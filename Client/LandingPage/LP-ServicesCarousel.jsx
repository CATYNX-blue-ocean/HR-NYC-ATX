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
    <Container style={{ height: '40vh' }}>
      <Typography helvetica="true" variant="h5">
        Services
      </Typography>
      <Typography helvetica="true" variant="caption">
        <Link to="/categories" style={{ textDecoration: 'none' }}>
            See more...
        </Link>
      </Typography>
      <Carousel itemsToShow={3} pagination={false} renderArrow={myArrow}>
        {servicesCategories.map((item) => <CategoryCardServices key={item._id}
          photo={item.image} name={item.category} description={item.description} />)}
      </Carousel>
    </Container>
  );

};

export default ServicesCarousel;