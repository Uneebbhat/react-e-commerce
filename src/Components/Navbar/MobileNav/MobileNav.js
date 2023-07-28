import React, { useState } from "react";
import "./MobileNav.css";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

export default function MobileNav() {
  const navigate = useNavigate();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleMobNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <>
      <nav className="mob-nav show">
        <div className="mob-nav-links">
          <ul>
            <li className="li">
              <Link to="/home">Home</Link>
            </li>
            <li className="li">
              <Link to="/products">Products</Link>
            </li>
            <div className="signout">
              <button className="btn sign-out" onClick={logout}>
                Sign out
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
