import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Login from "../components/Logincomp";

function LogIn() {
  //   const [loginCredentials, setloginCredentials] =
  //     useState<LoginCredentials | null>(null);

  //   const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
  //     // console.log("e.target.name", e.target.name);
  //     setloginCredentials({
  //       ...(loginCredentials as LoginCredentials),
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  //   const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     // console.log("loginCredentials", loginCredentials);

  //     const myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  //     const urlencoded = new URLSearchParams();
  //     urlencoded.append("email", loginCredentials!.email);
  //     urlencoded.append("password", loginCredentials!.password);

  //     const requestOptions = {
  //       method: "POST",
  //       headers: myHeaders,
  //       body: urlencoded,
  //     };
  //     try {
  //       const response = await fetch(
  //         "http://localhost:5001/api/user/login",
  //         requestOptions
  //       );
  //       if (response.ok) {
  //         const result: LoginResponse = await response.json();
  //         console.log("result", result);
  //         const token = result.token;
  //         console.log("token", token);
  //         if (token) {
  //           localStorage.setItem("token", token);
  //         }
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   //   const isUserLoggedIn = () => {
  //   //     const token = localStorage.getItem("token");
  //   //     return token ? true : false;
  //   //   };
  //   //   useEffect(() => {
  //   //     if (isUserLoggedIn()) {
  //   //       window.location.href = "/";
  //   //     }
  //   //   }, []);
  return (
    <div>
      <h2>Login</h2>
      <Login />
    </div>
  );
}

export default LogIn;
