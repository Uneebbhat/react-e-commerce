import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/pages/Home/Home";
import SignIn from "./Components/Auth/SignIn/SignIn";
import LatestProducts from "./Components/LatestProducts/LatestProducts";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Products from "./Components/pages/Products/Products";
import Cart from "./Components/pages/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        {/* Only show the navbar if the user is not on the signup or signin page */}
        {window.location.pathname !== "/signup" &&
          window.location.pathname !== "/signin" && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/latestproducts" element={<LatestProducts />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
