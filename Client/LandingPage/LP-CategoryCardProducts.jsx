import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import useDataStore from '../zustandStore.js';

const CategoryCardProducts = function (props) {

  const setProductCategory = useDataStore((state) => state.setProductCategory);

  const handleTestClickProducts = function (e) {
    console.log('this click from Product Category Card');
    console.log(e);
  };

  return (
    <div className="landing-page-category-card" onClick={(e) => { handleTestClickProducts(e); }} >
      <img className="temp-photo" src={props.photo}></img>
      <h3>{props.name}</h3>

    </div>

  );
};

export default CategoryCardProducts;