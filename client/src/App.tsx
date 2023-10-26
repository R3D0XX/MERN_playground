import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
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
