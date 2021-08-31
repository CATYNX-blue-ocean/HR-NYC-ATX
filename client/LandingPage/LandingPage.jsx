import React from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';

import NavBar from '../shared/NavBar.jsx';
import FeatureCarousel from './LP-FeatureCarousel.jsx';
import ProductsCarousel from './LP-ProductsCarousel.jsx';
import ServicesCarousel from './LP-ServicesCarousel.jsx';

const LandingPage = function () {
  return (
    <>
      {/* <NavBar /> */}
      <FeatureCarousel />
      <ProductsCarousel />
      <ServicesCarousel />
    </>

  );

};

export default LandingPage;