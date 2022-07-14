import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Auth";

export default function NavBar() {
  const { profile, setProfile } = useContext(UserContext);

  const clickLogout = () => {
    setProfile({
      user: null,
    });
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="logo192.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            ></img>
            eCommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              {profile.user != null ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {profile.user.username}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/" className="dropdown-item">
                        Favourites
                      </Link>
                    </li>
                    <li>
                      <Link to="/Post" className="dropdown-item">
                        Sell
                      </Link>
                    </li>
                    <li>
                      <Link to="/UserListings" className="dropdown-item">
                        User Listings
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Messages
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={clickLogout}
                        href="/#"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
