import React from "react";

import MyNavbar from "../components/MyNavbar";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <MyNavbar />
      <br />
      <Register />
      <br />
      <Profile />
    </div>
  );
};

export default Home;
