import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteErrorType {
  data: string;
  error: {
    message: string;
  };
  status: number;
  statusText: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteErrorType;
  console.log("Error", error);
  if (error) {
    return (
      <div>
        <h1>Error: {error.error.message}</h1>
        <p>Status: {error.status}</p>
        <p>Status Text: {error.statusText}</p>
        <p>Data: {error.data}</p>
      </div>
    );
  }
};

export default ErrorPage;
