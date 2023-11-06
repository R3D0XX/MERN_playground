import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Logincomp from "../components/Logincomp";

function Login() {
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
      <Logincomp />
    </div>
  );
}

export default Login;
