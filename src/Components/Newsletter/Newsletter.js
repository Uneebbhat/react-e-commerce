import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <>
      <section className="news-letter-section">
        <div className="news-letter-wrapper">
          <div className="news-letter-heading">
            <h3>Subscribe To Our Newsletter</h3>
          </div>
          <div className="news-letter-input">
            <div className="input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="sub-button">
              <button className="sub-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
