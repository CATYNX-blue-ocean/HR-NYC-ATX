import React from 'react';
import axios from 'axios';
import hero1 from '/dist/static/default_category_img/hero1.jpg';

const ItemCardFeature = function (props) {

  const handleTestClickFeature = function () {
    console.log('this click from Feature Banner');
  };

  return (
    <div className="feature-item-card-container" onClick={() => { handleTestClickFeature(); }}>
      <img className="feature-item-card-image" src={hero1}></img>
    </div>

  );
};

export default ItemCardFeature;


// styles={{ objectFit: 'contain', height: 'vh' }}
// src={hero1}