import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";

const AuthHook = () => {
  const { user } = useContext(useAuth);
  const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
};

export default AuthHook;
