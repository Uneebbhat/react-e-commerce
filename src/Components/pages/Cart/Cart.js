import React, { useState, useEffect } from "react";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const deleteItem = (index) => {
    // Create a copy of the current cartItems state
    const updatedCartItems = [...cartItems];
    // Remove the item at the specified index
    updatedCartItems.splice(index, 1);
    // Update the cartItems state with the updated array
    setCartItems(updatedCartItems);
    // Update the local storage with the updated cartItems
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <section className="cart-section">
        <div className="cart-section-wrapper">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="cart-product" key={index}>
                <div className="cart-product-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-product-data">
                  <div className="cart-product-title">
                    <h3>{item.title}</h3>
                  </div>
                  <IconButton onClick={() => deleteItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-empty">
              <h2>Cart is empty</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
