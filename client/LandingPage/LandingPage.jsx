import React from 'react';
import axios from 'axios';

import NavBar from '../shared/NavBar.jsx';
import FeatureCarousel from './LP-FeatureCarousel.jsx';
import ProductsCarousel from './LP-ProductsCarousel.jsx';
import ServicesCarousel from './LP-ServicesCarousel.jsx';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <NavBar /> */}
        <FeatureCarousel />
        <ProductsCarousel />
        <ServicesCarousel />
      </>
    );
  }
}

export default LandingPage;