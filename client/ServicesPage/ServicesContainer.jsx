import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import useStyles from './styles';
import ServicesCard from './ServicesCard.jsx';
import useDataStore from '../zustandStore.js';

const ServicesContainer = ({ }) => {
  const classes = useStyles();

  const services = useDataStore((state) => state.serviceData);
  const currentServiceCategory = useDataStore((state) => state.currentServiceCategory);
  let pathName = window.location.pathname;
  pathName = pathName.split('/');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const [sortedServices, setSortedServices] = useState(services);
  const [servicesPhotos, setServicesPhotos] = useState([]);

  console.log(services);

  //change sorting of products
  const sortServices = (parameter) => {
    let sortedList = services;
    if (parameter === 'rating') {
      sortedList.sort((firstEl, secondEl) => {
        let rate1 = firstEl.ratings.reduce((accumulator, currentVal) => accumulator + currentVal, 0) / firstEl.ratings.length;
        let rate2 = secondEl.ratings.reduce((accumulator, currentVal) => accumulator + currentVal, 0) / secondEl.ratings.length;
        if (rate1 > rate2 || (isNaN(rate2) && rate1 > 0)) {
          return -1;
        } else if (rate1 < rate2 || (isNaN(rate1) && rate2 > 0)) {
          return 1;
        } else if (isNaN(rate1) && isNaN(rate2)) {
          return 0;
        }
      });
    } else if (parameter === 'name') {
      sortedList.sort((firstEl, secondEl) => {
        if (firstEl.serviceName > secondEl.serviceName) {
          return 1;
        } else if (firstEl.serviceName < secondEl.serviceName) {
          return -1;
        } else if (firstEl.serviceName === secondEl.serviceName) {
          return 0;
        }
      });
    } //else if (parameter === 'location') {
    //}
    setSortedServices([sortedList]);
  };

  // useEffect(async () => {
  // 	const result = await axios(
  // 		'http://localhost:3000/categories'
  // 	);
  // 	setServicesPhotos(result.data);
  // }, []);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //get current posts, note that services are an array of arrays
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let totalPosts;
  let currentPosts;
  let newServices = [];
  if (services) {
    totalPosts = services.length;
    currentPosts = services.slice(indexOfFirstPost, indexOfLastPost);
  }

  if (services) {
    if (pathName[1] === 'services-by-category') {
      for (var i = 0; i < services.length; i++) {
        //console.log(services[0][i].serviceCategory.toLowerCase(), currentServiceCategory);
        if (services[i].serviceCategory.toLowerCase() === currentServiceCategory.toLowerCase()) {
          newServices.push(services[i]);
        }
      }
      totalPosts = newServices.length;
      currentPosts = newServices.slice(indexOfFirstPost, indexOfLastPost);
    } else {
      totalPosts = services.length;
      currentPosts = services.slice(indexOfFirstPost, indexOfLastPost);
    }
  }

  const numberOfPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <Container maxwidth='lg'>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            {currentPosts.map((service, i) => (
              <Grid item key={i} xs={4} >
                <ServicesCard service={service} />
              </Grid>
            ))}
            <Pagination
              onChange={(event, val) => paginate(val)}
              count={numberOfPages}
              page={currentPage}
              style={{ marginTop: '50px', marginBottom: '50px', left: '10%', top: '90%' }}
              color="primary"
              size="large" />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default ServicesContainer;
