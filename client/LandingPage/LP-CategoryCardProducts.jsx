import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import useDataStore from './tempZustand.js';

const CategoryCardProducts = function (props) {

  const setProductCategory = useDataStore((state) => state.setProductCategory);

  const handleProductCategoryClick = function (e) {
    console.log('this click from Product Category Card');
    console.log(e);
  };

  return (

    <Card
      data-myattr={product.id}
      // value={product.id}
      id={props.key}
      name={props.name}
      onClick={(e) => { handleProductCategoryClick(e); }}
      className={classes.root}>
      {props.photo ? (
        <CardMedia
          className={classes.media}
          image={props.photo} />
      ) : (
        <CircularProgress />
      )}
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p" style={{ fontWeight: 'bold', color: 'black' }}>
          {product.productName}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {props.description.length > 105 ? props.description.slice(0, 105) + '...' : props.description}
        </Typography>
      </CardContent>
    </Card>

  );
};

export default CategoryCardProducts;

// <div className="landing-page-category-card" onClick={(e) => { handleTestClickProducts(e); }} >
//   <img className="temp-photo" src={props.photo}></img>
//   <h3>{props.name}</h3>
// </div>


// const ProductsCard = ({ product }) => {
//   const classes = useStyles();

//   const setCurrentProduct = useDataStore((state) => state.setCurrentProduct);
//   const currentProduct = useDataStore((state) => state.currentProduct);

//   let reviewAverage = () => {
//     let reviewsData = product.ratings || [1, 2, 3, 4, 5, 4, 3, 2];
//     if (reviewsData.length === 0) {
//       reviewsData = [1, 2, 3, 4, 5, 4, 3, 2];
//     }
//     let sum = 0;
//     reviewsData.forEach(result => {
//       sum += result;
//     });
//     return Number((sum / (reviewsData.length)).toFixed(1));
//   };

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Card
//       data-myattr={product.id}
//       value={product.id}
//       id={product.id}
//       name={product.id}
//       onClick={(e) => {
//         console.log(e.target.parentElement.id);
//         setCurrentProduct(e.target.parentElement.id);
//       }}
//       className={classes.root}>
//       {product.productImage ? (
//         <CardMedia
//           className={classes.media}
//           image={product.productImage[0]}/>
//       ) : (
//         <CircularProgress/>
//       )}
//       <CardContent>
//         <>
//           <Rating style={{color: '#5E2EBA'}} name="read-only" value={reviewAverage()} readOnly precision={0.25}/>
//         </>
//         <Typography variant="h6" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
//           {product.productName}
//         </Typography>
//         <Typography variant="caption" color="textSecondary" component="p">
//           {product.productDescription.length > 105 ? product.productDescription.slice(0, 105) + '...' : product.productDescription}
//         </Typography>
//         <Typography align='right' variant="caption" color="textSecondary" component="p" style={{fontWeight: 'bold', color: 'black'}}>
// 				&nbsp;{'$' + product.price.split('.')[0]}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductsCard;