import React, { useState, useMemo, useEffect } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import NoMatchPage from "./Components/NoMatchPage/NoMatchPage";
import Register from "./Components/Register/Register";
import Post from "./Components/Postitem/Post";
import { UserContext } from "./Auth";
import UserListings from "./Components/UserListings/UserListings";
import ListingDetails from "./ListingDetails/ListingDetails";
import AllListings from "./Components/AllListings/AllListings";

export default function App() {
  const [profile, setProfile] = useState({});
  const value = useMemo(() => ({ profile, setProfile }), [profile, setProfile]);

  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    if (data !== null) setProfile(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(profile), [
      profile,
    ]);
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AllListings />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Post" element={<Post />} />
          <Route exact path="/UserListings" element={<UserListings />} />
          <Route exact path="/SingleProduct" element={<ListingDetails />} />
          <Route exact path="*" element={<NoMatchPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
