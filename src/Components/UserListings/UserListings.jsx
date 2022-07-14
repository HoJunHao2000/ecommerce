import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Auth";
import Product from "../AllListings/Listing";
import Axios from "axios";

export default function UserListings() {
  const { profile } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://ecommerce-mongodb-server.herokuapp.com/UserListings/" +
        profile.user._id
    ).then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="mt-3">{profile.user.username}'s Listings</h2>

      <div className="row">
        {products.map((prod) => {
          return <Product key={prod._id} product={prod} />;
        })}
      </div>
    </div>
  );
}
