import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import "./Products.css";

export default function Products() {
  const api = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filterProducts = selectedFilter
    ? data.filter((product) => product.category === selectedFilter)
    : data;

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
      <sectin className="products">
        <div className="filters">
          <select
            className="filter-selector"
            value={selectedFilter}
            onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
        <div className="product-wrapper">
          {filterProducts.map((product, id) => (
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
