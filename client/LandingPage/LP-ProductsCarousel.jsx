import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import Carousel, { consts } from "react-elastic-carousel";
import axios from "axios";
import CategoryCardProducts from "./LP-CategoryCardProducts.jsx";
import exampleData from "../../exampleData.js";
import useDataStore from "../zustandStore.js";

const ProductsCarousel = function (props) {
  const setProductCategory = useDataStore((state) => state.setProductCategory);
  const productCategories = useDataStore((state) => state.productCategories);

  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(universities.length);
    }
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };

  return (
    <div className="landing-page-category-carousel">
      <Typography helvetica="true" variant="h5">
        Products
      </Typography>
      <Link to="/categories">
        <Typography helvetica="true" variant="caption">
        See more...
        </Typography>
      </Link>
      <Carousel
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
        itemsToShow={3}
        pagination={false}
        renderArrow={myArrow}
      >
        {productCategories.map((item) => (
          <CategoryCardProducts
            key={item._id}
            photo={item.image}
            name={item.category}
            description={item.description}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
