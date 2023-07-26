import React from "react";
import "./Banner.css";
import headPhone from "../../assets/banner-img.png";

const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div className="banner-wrapper">
          <div className="banner-content">
            <h1>Shop Now!</h1>
            <p>
              Premium Wireless Over-Ear Headphones with Active Noise
              Cancellation and Built-in Mic for Hands-Free Calling and Voice
              Assistant Support
            </p>
            <div className="button">
              <button className="btn">Shop Now</button>
            </div>
          </div>
          <div className="banner-img">
            <img src={headPhone} alt="Head Phone" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
