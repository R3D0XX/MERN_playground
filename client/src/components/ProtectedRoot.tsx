import React, { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

type ProtectedRootProps = {
  children: React.ReactNode;
};

const ProtectedRoot = ({ children }: ProtectedRootProps) => {
  const { user } = useContext(AuthContext);

  return <>{user ? children : <h2>Login/Register to see this content</h2>}</>;
};

export default ProtectedRoot;
