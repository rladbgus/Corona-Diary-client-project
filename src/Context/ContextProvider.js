import React, { useState, useEffect } from "react";
import getLogin from "./Context";

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [token, setToken] = useState("");
  const [nickName, setNickName] = useState("");
  const getToken = window.sessionStorage.getItem("token");

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleIsChecking = () => {
    setIsChecking(!isChecking);
  };

  const handleToken = value => {
    setToken(value);
    window.sessionStorage.setItem("token", value);
  };

  const handleSetNickName = value => {
    setNickName(value);
    window.sessionStorage.setItem("nickName", value);
  };

  useEffect(() => {
    let ac = new AbortController();
    if (getToken) {
      handleLogin();
    }
    return () => {
      ac.abort();
    };
  }, []);

  return (
    <getLogin.Provider
      value={{
        isLogin,
        handleLogin,
        token,
        handleToken,
        isChecking,
        handleIsChecking,
        nickName,
        handleSetNickName,
      }}
    >
      {children}
    </getLogin.Provider>
  );
};

export default LoginProvider;
