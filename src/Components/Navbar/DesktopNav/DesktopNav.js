import React, { useState, useEffect } from "react";
import "./DesktopNav.css";
import logo from "../../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "../MobileNav/MobileNav";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

export default function DesktopNav() {
  const navigate = useNavigate();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  let cart = [];
  let count = 0;

  if (localStorage.getItem("cartItems")) {
    cart = JSON.parse(localStorage.getItem("cartItems"));
    count = cart.length;
  }

  const handleMobNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const logout = async () => {
    await signOut(auth);
    // ds
    navigate("/signin");
  };

  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} alt="amazon" />
            </Link>
          </div>
          <div className="navbar-links-wrapper">
            <div className="nav-links">
              <ul className="nav-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                {user && user.email === "admin@admin.com" && (
                  <li>
                    <Link to="/add-item">Add Item</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="right-wrapper">
            <div className="icons">
              <div className="nav-icons">
                <Link to="/cart">
                  <span className="cart-num">{count}</span>
                  <AiOutlineShoppingCart className="cart-icon" />
                </Link>
              </div>
              <div className="menu" onClick={handleMobNav}>
                <GiHamburgerMenu className="menu-icon" />
              </div>
            </div>
            <div className="signout">
              <button className="btn sign-out desk-btn" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className={`mob-nav ${showMobileNav ? "show" : ""}`}>
        <MobileNav />
      </div>
    </>
  );
}
