import React from 'react';
import axios from 'axios';

const ItemCardFeature = function (props) {

  const handleTestClickFeature = function () {
    console.log('this click from Feature Banner');
  };

  return (
    <div className="feature-item-card" onClick={() => { handleTestClickFeature(); }}>
      <img className="temp-photo" src={props.photo}></img>
      <h1>{props.name}</h1>
    </div>

  );
};

export default ItemCardFeature;