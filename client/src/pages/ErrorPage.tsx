import React from "react";

interface RouteErrorType {
  data: string;
  error: {
    message: string;
  };
  status: number;
  statusText: string;
}

const ErrorPage = () => {
  return (
    <div>
      <h2>Something went wrong...</h2>
      <h3>{}</h3>
    </div>
  );
};

export default ErrorPage;
