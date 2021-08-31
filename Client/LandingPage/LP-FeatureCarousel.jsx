import React from 'react';
import Carousel from 'react-elastic-carousel';
import ItemCardFeature from './LP-ItemCardFeature.jsx';

let items = {
  teams: [
    { name: 'South Carolina', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/South_Carolina_Gamecocks_logo.svg/1200px-South_Carolina_Gamecocks_logo.svg.png' },
    { name: 'Alabama', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Alabama_Crimson_Tide_logo.svg/1200px-Alabama_Crimson_Tide_logo.svg.png' },
    { name: 'Arkansas', photo: 'https://media.tegna-media.com/assets/KFSM/images/087fb015-76c2-4b5c-9222-a163e0a92afa/087fb015-76c2-4b5c-9222-a163e0a92afa_750x422.png' },
    { name: 'Texas A&M', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Texas_A%26M_University_logo.svg/1200px-Texas_A%26M_University_logo.svg.png' },
    { name: 'LSU', photo: 'https://1000logos.net/wp-content/uploads/2017/10/LSU-Logo-2007.jpg' },
    { name: 'Mississippi State', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mississippi_State_Bulldogs_logo.svg/1200px-Mississippi_State_Bulldogs_logo.svg.png' },
    { name: 'Ole Miss', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ole_Miss_Rebels_logo.svg/1200px-Ole_Miss_Rebels_logo.svg.png' },
    { name: 'Auburn', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Auburn_Tigers_logo.svg/1200px-Auburn_Tigers_logo.svg.png' },
    { name: 'Florida', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Florida_Gators_football_logo.svg/1200px-Florida_Gators_football_logo.svg.png' },
    { name: 'Missouri', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Missouri_Tigers_logo.svg/1200px-Missouri_Tigers_logo.svg.png' },
    { name: 'Georgia', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/1200px-Georgia_Athletics_logo.svg.png' },
    { name: 'Vanderbilt', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Vanderbilt_Commodores_logo.svg/1200px-Vanderbilt_Commodores_logo.svg.png' },
    { name: 'Kentucky', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kentucky_Wildcats_logo.svg/1200px-Kentucky_Wildcats_logo.svg.png' },
    { name: 'Tennessee', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tennessee_Volunteers_logo.svg/1200px-Tennessee_Volunteers_logo.svg.png' },
  ]
};


const FeatureCarousel = function () {

<<<<<<< HEAD:Client/LandingPage/LP-FeatureCarousel.jsx
=======

>>>>>>> ccc8d45aead5cfb3c3c61029324e16ab0e2ffdb6:client/LandingPage/LP-FeatureCarousel.jsx
  return (
    <div className="landing-page-feature-carousel">
      <Carousel itemsToShow={1} pagination={false} transitionMs={1500} showArrows={false}
        easing={'ease'} enableAutoPlay={true} autoPlaySpeed={4000}>
        {items.teams.map((item) => <ItemCardFeature key={item.name}
          photo={item.photo} name={item.name} />)}
      </Carousel>
    </div>
  );


};

export default FeatureCarousel;