import React, { useState } from "react";
import getLogin from "./Context";

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [token, setToken] = useState("");
  const [googleToken, setGoogleToken] = useState("");

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  const handleIsChecking = () => {
    setIsChecking(!isChecking);
  };

  const handleToken = value => {
    setToken(value);
  };
  const handleGoogleToken = value => {
    setGoogleToken(value);
  };

  return (
    <getLogin.Provider
      value={{
        isLogin,
        handleLogin,
        token,
        handleToken,
        googleToken,
        handleGoogleToken,
        isChecking,
        handleIsChecking,
      }}
    >
      {children}
    </getLogin.Provider>
  );
};

export default LoginProvider;
