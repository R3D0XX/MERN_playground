import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginCredentials, LoginResponse, User } from "../types/CustomTypes";
import { useNavigate } from "react-router-dom";
import LogIn from "../pages/Login";

function Logincomp() {
  const {
    loginCredentials,
    setLoginCredentials,
    logIn,
    isLoggedIn,
    setIsLoggedIn,
    user,
  } = useContext(AuthContext);

  //   const [passwordType, setPasswordtype] = useState("password");

  const navigateTo = useNavigate();

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.name", e.target.name);
    setLoginCredentials({
      ...(loginCredentials as LoginCredentials),
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("loginCredentials", loginCredentials);
    logIn();
    navigateTo("/profile");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginCredentials!.email);
    urlencoded.append("password", loginCredentials!.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    try {
      const response = await fetch(
        "http://localhost:5001/api/user/login",
        requestOptions
      );
      if (response.ok) {
        const result: LoginResponse = await response.json();
        console.log("result", result);
        const token = result.token;
        console.log("token", token);
        if (token) {
          localStorage.setItem("token", token);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <h2>Login</h2>

      <div>
        <form onSubmit={handleSubmitLogin} className="input-form">
          <label htmlFor="email">
            E-Mail{" "}
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleLoginInput}
            />
          </label>

          <label htmlFor="password">
            Password{" "}
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleLoginInput}
            />{" "}
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Logincomp;
