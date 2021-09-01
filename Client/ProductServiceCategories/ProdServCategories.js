import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';
import useDataStore from '../zustandStore';
import CategoriesCards from './CategoriesCards';
const ProdServCategories = (props) => {

  const productsList = useDataStore((state) => state.productCategories);
  const servicesList = useDataStore((state) => state.servicesCategories);
  var categoryArray = [ productsList, servicesList ];

  console.log(categoryArray);

  return (
    <Container>
      <div className="ProdServCategories">
        {categoryArray.forEach( type => {
          console.log('iteration of categories ', type);
          return (
            <CategoriesCards categoriesList={type} />
          );
        } )}
      </div>
    </Container>
  );
};

export default ProdServCategories;
