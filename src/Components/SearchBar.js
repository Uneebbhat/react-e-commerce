import React from "react";
import "./SearchBar.css";

export default function SearchBar({
  setSearch,
  selectedFilter,
  handleFilterChange,
}) {
  return (
    <>
      <div
        className="container-input"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
        }}>
        <input
          type="text"
          className="input-field border border-black rounded"
          placeholder="Item Name"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-container">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md p-2 drop-down"
            style={{ background: "#272727", color: "white" }}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
      </div>
    </>
  );
}
