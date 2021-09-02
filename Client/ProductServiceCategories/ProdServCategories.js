import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import useDataStore from '../zustandStore';
import CategoriesCards from './CategoriesCards';
import NavBar from '../shared/NavBar.jsx';

const ProdServCategories = (props) => {
  const productsList = useDataStore((state) => state.productCategories);
  const servicesList = useDataStore((state) => state.servicesCategories);
  console.log(productsList, servicesList );

  var categoryArray = [
    ['Products', ...productsList],
    ['Services', ...servicesList],
  ];


  return (
    <Router>
      <Grid container spacing={2} direction="row" justifyContent="space-evenly">
        {/* <Router>
        <Grid item width="1">
          <NavBar />
        </Grid>
      </Router> */}
        {categoryArray.map((type, i) => {
          const categoryName = type[0];
          return (
            <CategoriesCards
              key={i}
              categoryTypes={type}
              categoryName={categoryName}
            />
          );
        })}
      </Grid>
    </Router>
  );
};

export default ProdServCategories;
