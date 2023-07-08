import React, { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState({});

  const handleLogin = async (data) => {
    const response = await authService.login(data);
    console.log(response);
    setUser(response.data.user);
    history.push("/users");
  };

  const handleLogout = () => {};

  const handleRegister = () => {};

  const handleRefreshToken = async () => {
    const token = handleGetItemFromLS("token");
    if (token) {
      const { user } = await authService.refresh();
      setUser(user);
    }
  };

  const handleGetItemFromLS = (value) => {
    return localStorage.getItem(value);
  };

  useEffect(() => {
    //     // const token = handleGetItemFromLS("token");
    //     // if (token) {
    handleRefreshToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
