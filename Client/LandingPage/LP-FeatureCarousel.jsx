import React from 'react';
import { Container } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import ItemCardFeature from './LP-ItemCardFeature.jsx';
import useStore from '../zustandStore.js';
import exampleData from '../../exampleData.js';
import hero1 from '/dist/static/default_category_img/hero1_v2.jpg';
import hero2 from '/dist/static/default_category_img/hero2_v2.jpg';
import hero3 from '/dist/static/default_category_img/hero3_v2.jpg';

let items = [hero1, hero2, hero3];

const FeatureCarousel = function () {
  const carouselRef = React.useRef(null);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let resetTimeout;

  return (
    <Container>
      <div className="landing-page-feature-carousel">
        <Carousel
          itemsToShow={1}
          pagination={false}
          transitionMs={1500}
          showArrows={false}
          easing={'ease'}
          enableAutoPlay={true}
          autoPlaySpeed={6000}
          ref={carouselRef}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            if (index + 1 === totalPages) {
              resetTimeout = setTimeout(() => {
                carouselRef.current.goTo(0);
              }, 1500); // same time
            }
          }}
          itemsToShow={1}
        >
          {items.map((item) => (
            <ItemCardFeature key={item} photo={item} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default FeatureCarousel;
