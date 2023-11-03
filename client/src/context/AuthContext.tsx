import React, { ReactNode, createContext, useEffect, useState } from "react";
import { LoginCredentials, LoginResponse, User } from "../types/CustomTypes";

interface AuthContextType {
  user: User | null;
  loginCredentials: LoginCredentials | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  setUser: (user: User) => void;
  logIn: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setLoginCredentials: (loginCredentials: LoginCredentials) => void;
  logOut: () => void;
  getProfile: () => void;
  authenticateUser: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}
const AuthInitContext = {
  user: null,
  loginCredentials: null,
  isLoggedIn: false,
  isLoading: true,
  setUser: () => {},
  logIn: () => {},
  setIsLoggedIn: () => {},
  setLoginCredentials: () => {},
  logOut: () => {},
  getProfile: () => {},
  authenticateUser: () => {},
};
export const AuthContext = createContext<AuthContextType>(AuthInitContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  //* Functions to interact with the API and update state accordingly
  const logIn = async () => {
    setIsLoggedIn(false);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginCredentials!.email);
    urlencoded.append("password", loginCredentials!.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/user/login",
        requestOptions
      );

      if (response.ok) {
        const results: LoginResponse = await response.json();
        console.log("results.username :>> ", results);
        const token = results.token;
        localStorage.setItem("token", token);
        setUser(results.user);
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        throw new Error("Failed to authenticate user.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`An error occurred while trying to log in.\n\n${error}`); //\n\n sind zeilenumbrüche
    }
  };
  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("need to be logged-In");
      setUser(null);
    }
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      try {
        const response = await fetch(
          "http://localhost:5001/api/user/profile",
          requestOptions
        );
        if (response.ok) {
          setIsLoading(false);
        }
        if (response.ok) {
          const userData: User = await response.json();
          console.log("userData", userData);
          setUser({ ...userData });
          setIsLoggedIn(true);
        } else {
          throw new Error("Failed to load profile data.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert(`An error occurred while loading the profile.\n\n${error}`);
      }
    }
  };

  const isUserLoggedIn = () => {
    return !!localStorage.getItem("token");
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  const authenticateUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      try {
        const response = await fetch(
          "http://localhost:5001/api/user/profile",
          requestOptions
        );
        if (response.ok) {
          const result = await response.json();
          console.log("result", result);
          const user = result.userProfile as User;
          setUser({ ...user });
          setIsLoggedIn(true);
          setIsLoading(false);
        } else {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          setIsLoading(false);
          throw new Error("Invalid Token!");
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error:", error);
        alert(`An error occurred while authenticating.\n\n${error}`);
      }
    } else {
      setIsLoading(false);
      setIsLoggedIn(false);
      console.log("no token");
    }
  };
  useEffect(() => {
    console.log("check if user is logged in");
    authenticateUser();
  }, [user?.username]);

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
        setUser,
        getProfile,
        loginCredentials,
        isLoading,
        setLoginCredentials,
        isLoggedIn,
        setIsLoggedIn,
        authenticateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
