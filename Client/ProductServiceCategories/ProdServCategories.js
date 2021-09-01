import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';
import useDataStore from '../zustandStore';
import CategoriesCards from './CategoriesCards';


const ProdServCategories = (props) => {

  const productsList = useDataStore((state) => state.productCategories);
  const servicesList = useDataStore((state) => state.servicesCategories);

  var categoryArray = [ ['Products', ...productsList], ['Services', ...servicesList] ];

  console.log(categoryArray);

  return (
    <Container>
      <div className="ProdServCategories">
        {categoryArray.map( type => {
          const categoryName = type[0];
          return (
            <CategoriesCards categoryTypes={type} categoryName={categoryName} />
          );
        })}
      </div>
    </Container>
  );
};

export default ProdServCategories;