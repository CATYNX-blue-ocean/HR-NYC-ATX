import React from 'react';
import Images from './PD-Images.jsx';
import Info from './PD-Info.jsx';
import Selector from './PD-Selector.jsx';
import { useLocation } from 'react-router-dom';
import useDataStore from '../zustandStore.js';
import Grid from '@material-ui/core/Grid';

const Overview = (props) => {
  const currentProduct = useDataStore((state) => state.currentProduct);

  console.log('this is current product', currentProduct);

  return (
    <div>
      <Grid container spacing={3} styles={{ padding: '5%' }}>
        <Grid item xs={7}>
          <Images
            images={currentProduct.productImage}
            styles={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={5}>
          <Info
            name={currentProduct.productName}
            description={currentProduct.productDescription}
            price={currentProduct.price}
            ratings={currentProduct.ratings}
          />
          <Selector
            inventory={currentProduct.inventory}
            product={currentProduct}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
