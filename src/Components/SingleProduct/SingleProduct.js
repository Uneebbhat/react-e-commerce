import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import Loader from "../Loader/Loader";
import Alert from "@mui/material/Alert";

const SingleProduct = ({ cartItemNumber, setCartItemNumber }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  // Function to handle adding the product to cart
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newItem = { image: product.image, title: product.title };
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setShowAlert(true);
    setCartItemNumber(cartItemNumber + 1);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  if (!product) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <section className="single-product-section">
      <div className="single-product-wrapper">
        <div className="product-img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="about-product-wrapper">
          <div className="about-product">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
          </div>
          <div className="cart-button">
            <button className="cart-btn" onClick={() => addToCart()}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {showAlert && (
        <Alert className="alert" severity="success">
          Successfully added to cart
        </Alert>
      )}
    </section>
  );
};

export default SingleProduct;
