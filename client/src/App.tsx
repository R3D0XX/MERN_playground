import { useEffect, useState } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyRoot from "./components/MyRoot";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MyNavbar from "./components/MyNavbar";
import LogIn from "./pages/Login";
import ProtectedRoot from "./components/ProtectedRoot";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MyRoot />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route
          path="profile"
          element={
            <ProtectedRoot>
              <Profile />
            </ProtectedRoot>
          }
        />
        <Route
          path="favorites"
          element={
            <ProtectedRoot>
              <Favorites />
            </ProtectedRoot>
          }
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
      <div className="main">
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </div>

      <h1> Spatial Magic</h1>
      <br />
      <Register />
      <br />
      <LogIn />
      <br />
      <Profile />
    </>
  );
}

const Root = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};

export default App;
