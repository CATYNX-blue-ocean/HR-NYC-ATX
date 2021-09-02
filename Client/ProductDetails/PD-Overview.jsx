import React from 'react';
import Images from './PD-Images.jsx';
import Info from './PD-Info.jsx';
import Selector from './PD-Selector.jsx';
import {useParams} from 'react-router-dom';


const Overview = () => {
  const {productid} = useParams();

  return(<h1>{productid}</h1>)
  // return (
  //   <div>
  //     <Images images={props.product.productImage}/>
  //     <Info
  //       name={props.product.productName}
  //       description={props.product.productDescription}
  //       price={props.product.price}
  //       ratings={props.product.ratings}
  //     />
  //     <Selector inventory={props.product.inventory}/>
  //   </div>
  // );
};

export default Overview;
