import React, { useState, useEffect } from "react";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import SearchBar from "../../SearchBar";

export default function Products() {
  const api = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredData = data.filter((product) => {
    if (selectedFilter === "all") {
      return true;
    } else {
      return product.category.toLowerCase() === selectedFilter.toLowerCase();
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SearchBar
        setSearch={setSearch}
        selectedFilter={selectedFilter}
        handleFilterChange={handleFilterChange}
      />

      <section className="latest-products">
        <div className="latest-product-wrapper">
          {filteredData
            .filter((product) => {
              return (
                search.toLowerCase() === "" ||
                product.title.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((product, id) => (
              <div className="card" key={id}>
                <div className="card-head">
                  <img src={product.image} alt={product.title} />
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
      </section>
    </>
  );
}
