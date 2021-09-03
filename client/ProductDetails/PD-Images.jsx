import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Images = ({ images}) => {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [thumbs, setThumbs] = useState(images.slice(1));
  const thumbStyle = {margin: '10px', height: '30px', width: '30px'};
  console.log('PD Images ', images);
  const changeMain = (selectedImg) => {
    setCurrentImg(selectedImg);
    let newThumbs = images.filter((item) => { return item !== selectedImg; });
    setThumbs(newThumbs);
  };

  return (
    <Container maxWidth="sm">
      {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
       */}
      <div className="main-image" style={{marginTop: '5%'}}>
        <img src={currentImg} style={{margin: '10px'}}/>
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
    </Container>
  );
};


export default Images;