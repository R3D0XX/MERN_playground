import React from "react";
import { Outlet } from "react-router-dom";

const MyRoot: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MyRoot;
