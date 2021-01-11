import React, { useEffect } from "react";

import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {/* <h2>Top Sellers</h2> */}
      <>
        {/* <Carousel showThumbs="false" infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img
              src="/images/carousel-1.jpg"
              className="sliderimg"
              alt="carousel-1"
            />
          </div>
          <div>
            <img
              src="/images/carousel-2.jpg"
              className="sliderimg"
              alt="carousel-2"
            />
          </div>
          <div>
            <img
              src="/images/carousel-3.jpg"
              className="sliderimg"
              alt="carousel-3"
            />
          </div>
        </Carousel> */}
      </>
      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
