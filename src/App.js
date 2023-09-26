import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/pages/Home/Home";
import SignIn from "./Components/Auth/SignIn/SignIn";
import LatestProducts from "./Components/LatestProducts/LatestProducts";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Products from "./Components/pages/Products/Products";
import Cart from "./Components/pages/Cart/Cart";

// New component for Navbar visibility handling
function NavbarWithVisibility() {
  const location = useLocation();
  const isSignupOrSigninPage =
    location.pathname === "/signup" || location.pathname === "/signin";

  return !isSignupOrSigninPage ? <Navbar /> : null;
}

function App({ search }) {
  return (
    <>
      <Router>
        <NavbarWithVisibility />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products search={search} />} />
          <Route path="/latestproducts" element={<LatestProducts />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
