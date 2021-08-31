import React, { useState } from 'react';

const Images = ({ images}) => {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [thumbs, setThumbs] = useState(images.slice(1));
  const thumbStyle = {margin: '10px', height: '30px', width: '30px'};
  return (
    <div>
      <div className="main-image">
        <img src={currentImg} />
      </div>
      <div className='thumb-images'>
        {thumbs.map((thumb, i) => {
          return (
            <span className='thumb' key={i} >
              <img src={thumb} style={thumbStyle}/>
            </span>
          );
        })}
      </div>
    </div>
  );
};


export default Images;