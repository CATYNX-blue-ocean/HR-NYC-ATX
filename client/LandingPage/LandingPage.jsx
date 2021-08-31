import React from 'react';
import axios from 'axios';
import { Container, Grid } from '@material-ui/core';
import NavBar from '../shared/NavBar.jsx';
import FeatureCarousel from './LP-FeatureCarousel.jsx';
import ProductsCarousel from './LP-ProductsCarousel.jsx';
import ServicesCarousel from './LP-ServicesCarousel.jsx';

const LandingPage = function () {
  return (
    <>
      <Grid container direction="column">
        <Grid item >
          <FeatureCarousel />
        </Grid>
        <Grid item >
          <ProductsCarousel />
        </Grid>
        <Grid item >
          <ServicesCarousel />
        </Grid>
      </Grid>
    </>

  );

};

export default LandingPage;