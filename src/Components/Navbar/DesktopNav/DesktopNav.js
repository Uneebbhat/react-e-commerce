import React, { useState } from "react";
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
  const handleMobNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const logout = async () => {
    await signOut(auth);
    console.log("hello");
    navigate("/signin");
  };

  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar">
          <div className="logo-wrapper">
            <img src={logo} alt="amazon" />
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
              </ul>
            </div>
          </div>
          <div className="right-wrapper">
            <div className="icons">
              <div className="nav-icons">
                <Link to="/cart">
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
