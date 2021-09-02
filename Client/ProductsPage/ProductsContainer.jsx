import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../shared/NavBar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import ProductsCard from './ProductsCard.jsx';
import { Pagination } from '@material-ui/lab';
import useStyles from './styles';
import useDataStore from '../zustandStore.js';

//react router for card click to product detail page??

const ProductsContainer = ({ }) => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const products = useDataStore((state) => state.productData);
  const [sortedProducts, setSortedProducts] = useState(products);

  //change sorting of products
  const sortProducts = (parameter) => {
    let sortedList = products;
    if (parameter === 'price') {
      sortedList.sort( (firstEl, secondEl) => {
        if (Number(firstEl.price) > Number(secondEl.price)) {
          return 1;
        } else if (Number(firstEl.price) < Number(secondEl.price)) {
          return -1;
        } else if (Number(firstEl.price) === Number(secondEl.price)) {
          return 0;
        }
      });
    } else if (parameter === 'rating') {
      sortedList.sort( (firstEl, secondEl) => {
        let rate1 = firstEl.ratings.reduce((accumulator, currentVal) => accumulator + currentVal, 0) / firstEl.ratings.length;
        let rate2 = secondEl.ratings.reduce((accumulator, currentVal) => accumulator + currentVal, 0) / secondEl.ratings.length;
        if (rate1 > rate2 || ( isNaN(rate2) && rate1 > 0)) {
          return -1;
        } else if (rate1 < rate2 || ( isNaN(rate1) && rate2 > 0)) {
          return 1;
        } else if ( isNaN(rate1) && isNaN(rate2)) {
          return 0;
        }
      });
    } else if (parameter === 'name') {
      sortedList.sort( (firstEl, secondEl) => {
        if (firstEl.productName > secondEl.productName) {
          return 1;
        } else if (firstEl.productName < secondEl.productName) {
          return -1;
        } else if (firstEl.productName === secondEl.productName) {
          return 0;
        }
      });
    } //else if (parameter === 'location') {
    //}
    setSortedProducts(sortedList);
  };

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let totalPosts;
  let currentPosts;
  if (products) {
    totalPosts = products.length;
    currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  }

  const numberOfPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <Container maxwidth='lg'>
      <Router>
        <NavBar/>
      </Router>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            {currentPosts.map((product, i) => (
              <Grid item key={i} xs={4} >
                <ProductsCard product={product}/>
              </Grid>
            ))}
            <Pagination
              onChange={(event, val) => paginate(val)}
              count={numberOfPages}
              page={currentPage}
              style={{marginTop: '50px', marginBottom: '50px', left: '10%', top: '90%'}}
              color="primary"
              size="large"/>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default ProductsContainer;
