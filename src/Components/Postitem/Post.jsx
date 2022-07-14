import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import FileBase64 from "react-file-base64";
import { UserContext } from "../../Auth";

export default function Post() {
  const navigate = useNavigate();
  const { profile } = useContext(UserContext);

  const [itemName, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");

  const createPost = () => {
    if (!profile.user == null) {
      alert("You have to login to create a listing!");
    } else if (
      itemName.length > 0 &&
      price.length > 0 &&
      description.length > 0 &&
      contact.length > 0
    ) {
      Axios.post("https://ecommerce-mongodb-server.herokuapp.com/Post", {
        itemName,
        price,
        description,
        contact,
        image,
        user: profile.user,
        poster: profile.user.username,
      }).then(alert("Item Listed!"));
    } else {
      alert("One or more of the required fields is empty!");
    }
    navigate("/");
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="mb-md-5 mt-md-4 pb-5">
            <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              List an item
            </h2>
            <form>
              <div className="form-group my-2">
                <label>Item name</label>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-2">
                <label>Price</label>
                <input
                  type="text"
                  onChange={(event) => setPrice(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-2">
                <label>Item description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div className="form-group my-2">
                <label>Contact</label>
                <input
                  type="text"
                  onChange={(event) => setContact(event.target.value)}
                  className="form-control"
                  placeholder="Enter means of contact e.g. phone number, email"
                />
              </div>
              <div className="form-group m-2">
                <label>Picture of item</label>
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => setImage(base64)}
                />
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button
                  className="btn btn-success btn-lg"
                  type="submit"
                  onClick={createPost}
                >
                  List it!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
