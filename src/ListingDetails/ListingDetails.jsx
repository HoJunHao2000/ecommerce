import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import "./ListingDetails.css";
import { UserContext } from "../Auth";

export default function ListingDetails() {
  const { profile } = useContext(UserContext);
  const location = useLocation();

  const onDelete = () => {
    Axios.delete("http://localhost:3001/delete/" + location.state.id);
    window.location.href = "/";
  };

  return (
    <div className="SingleProd">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <div className="main_image">
                <img
                  src={location.state.image}
                  id="main_product_image"
                  width="350"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 right-side">
              <div className="d-flex justify-content-between align-items-center my-5">
                <h2>{location.state.itemName}</h2>
              </div>
              <h3>$ {location.state.price}</h3>
              <div className="mt-2 pr-3 content">
                <p>{location.state.description}</p>
              </div>
              <div className="mt-5">Listed by: {location.state.poster}</div>
              <div>{location.state.contact}</div>
              {profile.user.username === location.state.poster ? (
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <button className="btn btn-outline-danger" onClick={onDelete}>
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
