import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import NavBar from '../shared/NavBar.jsx';
import FeatureCarousel from './LP-FeatureCarousel.jsx';
import ProductsCarousel from './LP-ProductsCarousel.jsx';
import ServicesCarousel from './LP-ServicesCarousel.jsx';
import useDataStore from '../zustandStore.js';

const LandingPage = function () {

  const setCategoryInformation = useDataStore((state) => state.setCategoryInformation);
  const productCategories = useDataStore((state) => state.productCategories);
  const servicesCategories = useDataStore((state) => state.servicesCategories);
  const resetProductData = useDataStore((state) => state.resetProductData);
  const resetServiceData = useDataStore((state) => state.resetServiceData);

  useEffect(() => {
    axios.get('http://localhost:3000/landing')
      .then((results) => {
        let productsArray = [];
        let servicesArray = [];
        for (var i = 0; i < results.data.length; i++) {
          if (results.data[i].type === 'product') {
            productsArray.push(results.data[i]);
          }
          if (results.data[i].type === 'service') {
            servicesArray.push(results.data[i]);
          }
        }
        setCategoryInformation(productsArray, servicesArray);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((results) => {
        resetProductData(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/services')
      .then((results) => {
        resetServiceData(results.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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