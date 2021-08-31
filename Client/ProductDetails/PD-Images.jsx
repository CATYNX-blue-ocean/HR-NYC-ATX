import React, { useState } from 'react';

const Images = ({ images}) => {
  const [currentImg, setCurrentImg] = useState(images[0]);

  return (
    <img src={currentImg} />
  );
};


export default Images;