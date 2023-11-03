import React from "react";

export type UserImage = {
  userImage: string;
};

export interface RouteErrorType {
  data: string;
  error: {
    message: string;
    status: number;
    statusText: string;
  };
}

export interface User extends UserImage {
  username: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  msg: string;
  user: User;
  token: string;
}
