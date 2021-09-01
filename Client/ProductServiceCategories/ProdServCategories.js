import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import useDataStore from '../zustandStore';
import CategoriesCards from './CategoriesCards';


const ProdServCategories = (props) => {

  const productsList = useDataStore((state) => state.productCategories);
  const servicesList = useDataStore((state) => state.servicesCategories);

  var categoryArray = [ ['Products', ...productsList], ['Services', ...servicesList] ];

  console.log(categoryArray);

  return (
    <Grid
      container
      direction='row'
      justify='space between'>
      {categoryArray.map( (type, i) => {
        const categoryName = type[0];
        return (
          <CategoriesCards key={i}categoryTypes={type} categoryName={categoryName} />
        );
      })}

    </Grid>
  );
};

export default ProdServCategories;