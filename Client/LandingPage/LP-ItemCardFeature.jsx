import React from 'react';
import axios from 'axios';


const ItemCardFeature = function (props) {

  const handleTestClickFeature = function (e) {
    console.log('this click from Feature Banner');
    console.log(e);
  };

  return (
    <div className="feature-item-card-container" onClick={(e) => { handleTestClickFeature(e); }}>
      <img className="feature-item-card-image" src={props.photo}></img>
    </div>

  );
};

export default ItemCardFeature;
