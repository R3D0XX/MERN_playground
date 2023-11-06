import React, { ReactNode } from "react";

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

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  user: User | null;
  loginCredentials: LoginCredentials | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  logIn: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLoginCredentials: React.Dispatch<
    React.SetStateAction<LoginCredentials | null>
  >;
  logOut: () => void;
  getProfile: () => void;
  authenticateUser: () => void;
}
