import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import useDataStore from '../zustandStore.js';

const CategoryCardServices = function (props) {

  const handleTestClickServices = function () {
    console.log('this click from Service Category Card');
  };

  return (
    <div className="landing-page-category-card" onClick={() => { handleTestClickServices(); }} >
      <img className="temp-photo" src={props.photo}></img>
      <h3>{props.name}</h3>

    </div>

  );
};

export default CategoryCardServices;