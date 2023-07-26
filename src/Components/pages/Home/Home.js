import React from "react";
import Banner from "../../Banner/Banner";
import LatestProducts from "../../LatestProducts/LatestProducts";
import "./Home.css";
import Newsletter from "../../Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="latest-product-heading">
        <h2>Latest Products</h2>
      </div>
      <LatestProducts />
      <Newsletter />
    </>
  );
}
