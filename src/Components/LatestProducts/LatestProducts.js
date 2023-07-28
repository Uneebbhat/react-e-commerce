import React, { useEffect, useState } from "react";
import "./LatestProducts.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function LatestProducts() {
  const api = "https://fakestoreapi.com/products?limit=5";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <sectin className="latest-products">
        <div className="latest-product-wrapper">
          {data.map((product, id) => (
            <div className="card" key={id}>
              <div className="card-head">
                <img src={product.image} alt="hello" />
              </div>
              <div className="card-body">
                <div className="about-product">
                  <h4>{product.title}</h4>
                  <div className="card-small-details">
                    <span className="price">${product.price}</span>
                    <span className="rating">{product.rating.rate}</span>
                  </div>
                </div>
                <div className="card-button">
                  <button className="card-btn">
                    <Link to={`/product/${product.id}`}>Read more</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </sectin>
    </>
  );
}
