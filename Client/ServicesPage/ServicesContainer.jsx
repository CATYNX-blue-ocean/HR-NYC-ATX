import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../shared/NavBar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { Container, AppBar, Typography, Grow, Grid, InputBase } from '@material-ui/core';
import ServicesCard from './ServicesCard.jsx';
import { Pagination } from '@material-ui/lab';
import useStyles from './styles';
import useDataStore from './tempZustand.js';

const ServicesContainer = ({ }) => {
  const classes = useStyles();

  const services = useDataStore((state) => state.serviceData);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const [servicesPhotos, setServicesPhotos] = useState([]);

  // useEffect(async () => {
	// 	const result = await axios(
	// 		'http://localhost:3014/Categories'
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
  if (services) {
    totalPosts = services[0].length;
    currentPosts = services[0].slice(indexOfFirstPost, indexOfLastPost);
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
            {currentPosts.map((service, i) => (
              <Grid item key={i} xs={4} >
                <ServicesCard service={service}/>
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

export default ServicesContainer;
