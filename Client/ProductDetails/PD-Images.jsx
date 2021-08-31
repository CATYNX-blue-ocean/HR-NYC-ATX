import React, { useState } from 'react';

const Images = ({ images}) => {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [thumbs, setThumbs] = useState(images.slice(1));
  const thumbStyle = {margin: '10px', height: '30px', width: '30px'};

  const changeMain = (selectedImg) => {
    setCurrentImg(selectedImg);
    let newThumbs = images.filter((item) => { return item !== selectedImg; });
    setThumbs(newThumbs);
  };

  return (
    <div>
      <div className="main-image">
        <img src={currentImg} />
      </div>
      <div className='thumb-images'>
        {thumbs.map((thumb, i) => {
          return (
            <span className='thumb' key={i} onClick={() => changeMain(thumb)} >
              <img src={thumb} style={thumbStyle}/>
            </span>
          );
        })}
      </div>
    </div>
  );
};


export default Images;