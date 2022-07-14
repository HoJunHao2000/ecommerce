import React, { useState, useEffect } from "react";
import "./search.css";
import Product from "./Listing";
import Axios from "axios";
import { BsSearch } from "react-icons/bs";

export default function AllListings() {
  const [searchParam, setSearchParam] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://ecommerce-mongodb-server.herokuapp.com/AllListings"
    ).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="mt-3">Listings</h2>
      <div className="dash mb-5">
        <center>
          <div className="bar">
            <BsSearch />
            <input
              className="searchbar"
              type="text"
              placeholder="Search for an item ..."
              value={searchParam}
              onChange={(event) => setSearchParam(event.target.value)}
            />
          </div>
        </center>
      </div>

      <div className="row">
        {products
          .filter((prod) => prod.itemName.toLowerCase().includes(searchParam))
          .map((prod) => {
            return <Product key={prod._id} product={prod} />;
          })}
      </div>
    </div>
  );
}
