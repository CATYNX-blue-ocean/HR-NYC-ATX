import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../shared/NavBar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import ProductsCard from './ProductsCard.jsx';
import { Pagination } from '@material-ui/lab';
import useStyles from './styles';
import useDataStore from './tempZustand.js';

//react router for card click to product detail page??

const ProductsContainer = ({ }) => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const products = useDataStore((state) => state.productData);

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
