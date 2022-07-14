import React, { useState } from "react";
import Axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [re_password, setRepassword] = useState("");
  const [read, setRead] = useState(false);

  const createUser = () => {
    if (email.length > 0 && password.length > 0 && username.length > 0) {
      if (password === re_password && read) {
        Axios.post("http://localhost:3001/Register", {
          username,
          email,
          password,
        }).then((res) => {
          alert("User created!");
        });
      } else if (!read) {
        alert("Please read and agree with the Terms of Service");
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("One or more of the required fields is empty!");
    }
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        onChange={(event) => setUsername(event.target.value)}
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        onChange={(event) => setRepassword(event.target.value)}
                        className="form-control"
                        placeholder="Re-enter your password"
                      />
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      onChange={(event) => setRead(!read)}
                    />
                    <label className="form-check-label">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={createUser}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
