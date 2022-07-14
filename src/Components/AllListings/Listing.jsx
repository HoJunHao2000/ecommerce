import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Listing(props) {
  const [product] = useState(props.product);

  const navigate = useNavigate();

  return (
    <div className="col-lg-3">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <div className="card-body">
          <h4>{product.itemName}</h4>
          <h4 className="pt-2 border-top">{product.productName}</h4>
          <img
            className="activator"
            style={{ width: "100%", height: 300 }}
            src={product.image}
            alt=""
          />
          <h5 className="pt-2 border-top">$ {product.price}</h5>
        </div>
        <div className="card-footer">
          <div className="float-start">
            <button className="btn btn-outline-danger">Favorite</button>
          </div>
          <div className="float-end">
            <button
              className="btn btn-outline-success"
              onClick={() => {
                navigate("/SingleProduct", {
                  state: {
                    id: product._id,
                    itemName: product.itemName,
                    description: product.description,
                    image: product.image,
                    price: product.price,
                    poster: product.poster,
                    contact: product.contact,
                    user: product.user,
                  },
                });
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
