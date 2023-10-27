import { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyRoot from "./components/MyRoot";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MyRoot />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="profile"
          element={<Profile />}
          // children={[<Route path="favorites" element={<Favorites />}]}
        />
      </Route>
    )
  );

  // const fetchMemes = () => {
  //   fetch("localhost:5001/api/memes")
  //     .then((response) => response.json())
  //     .then((result) => console.log("result", result))
  //     .then((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   fetchMemes();
  // }, []);
  return (
    <>
      <h1> Spatial Magic</h1>
      <Register />
      <br />
      <Login />
      <br />
      <Profile />
    </>
  );
}

export default App;
