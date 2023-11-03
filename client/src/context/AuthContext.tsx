import React, { ReactNode } from "react";
import { LoginCredentials, User } from "../types/CustomTypes";

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
  getProfile: () => VideoColorPrimaries;
  authenicateUser: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}
const AuthContext = React.createContext<AuthContextType>({
  user: null,
  loginCredentials: null,
  isLoggedIn: false,
  isLoading: true,
  setUser: () => {},
  logIn: () => {},
  setIsLoggedIn: () => {},
  setLoginCredentials: () => {},
  logOut: () => {},
  getProfile: () => "none",
  authenicateUser: () => {},
});
export const useAuth = () => React.useContext(AuthContext);
function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: null,
        loginCredentials: null,
        isLoggedIn: false,
        isLoading: true,
        setUser: () => {},
        logIn: () => {},
        setIsLoggedIn: () => {},
        setLoginCredentials: () => {},
        logOut: () => {},
        getProfile: () => "none",
        authenicateUser: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

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
      "http://localhost:5005/api/users/login",
      requestOptions
    );

    if (response.ok) {
      const results: LogInResponse = await response.json();
      console.log("results.username :>> ", results);
      const token = results.token; //Token should be added to every function4 users (delete/update)
      if (token) {
        localStorage.setItem("token", token);
        setUser(results.user);
        console.log("user is set after login");
        setIsLoggedIn(true);
      }
    }
  } catch (err) {
    const error = err as Error;
    console.log("error :>> ", error.message);
  }
};

export default AuthContext;
