import React from "react";

export default function SearchBar({
  setSearch,
  selectedFilter,
  handleFilterChange,
}) {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
        }}>
        <input
          type="text"
          className="input-field border border-black rounded"
          style={{ padding: "5px 10px", outline: "none", marginRight: "8px" }}
          placeholder="Item Name"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-container">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-md p-2">
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
