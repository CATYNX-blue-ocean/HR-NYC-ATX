import React from 'react';
import axios from 'axios';


const ItemCardFeature = function (props) {

  const handleTestClickFeature = function () {
    console.log('this click from Feature Banner');
  };

  return (
    <div className="feature-item-card-container" onClick={() => { handleTestClickFeature(); }}>
      <img className="feature-item-card-image" src={props.photo}></img>
    </div>

  );
};

export default ItemCardFeature;


// styles={{ objectFit: 'contain', height: 'vh' }}
// src={hero1}