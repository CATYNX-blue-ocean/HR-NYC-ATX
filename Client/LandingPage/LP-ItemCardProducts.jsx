import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const ItemCardProducts = function (props) {

  return (
    <div className="landing-page-item-card">
      <img className="temp-photo" src={props.photo}></img>
      <h3>{props.name}</h3>

    </div>

  );
};

export default ItemCardProducts;