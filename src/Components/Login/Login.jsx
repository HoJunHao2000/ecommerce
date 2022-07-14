import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Auth";
import Axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const { setProfile } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onLoginClick = () => {
    Axios.post("http://localhost:3001/Login", {
      email,
      password,
    })
      .then((res) => {
        if (res.data != null) {
          setProfile(res.data);
          navigate(-1);
        } else {
          setMessage(
            <span className="text-danger">Incorrect email or password</span>
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Login
              </h2>

              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Username or email"
                />
              </div>

              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                />
              </div>

              <p className="small mb-5 pb-lg-2">
                <a href="#!" className="text-blue-50">
                  Forgot password?
                </a>
              </p>
              <div className="text">
                <div>{message}</div>
                <button
                  className="btn btn-primary btn-lg"
                  type="submit"
                  onClick={onLoginClick}
                >
                  Login
                </button>
              </div>
            </div>

            <div>
              <p className="mb-0">
                Don't have an account?
                <a href="/Register" className="text-blue-50">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
