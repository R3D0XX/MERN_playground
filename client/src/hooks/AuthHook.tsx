import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthHook = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
};

export default AuthHook;
