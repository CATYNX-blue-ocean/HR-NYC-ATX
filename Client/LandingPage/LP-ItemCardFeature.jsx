import React from 'react';
import axios from 'axios';

const ItemCardFeature = function (props) {

  return (
    <div className="feature-item-card">
      <img className="temp-photo" src={props.photo}></img>
      <h1>{props.name}</h1>
    </div>

  );
};

export default ItemCardFeature;