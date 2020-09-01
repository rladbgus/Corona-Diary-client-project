import React, { useState } from "react";
import getLogin from "./Context";

const LoginProvider = ({ children }) => {

  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleToken = (v) => {
    setToken(v);
  }

  return (
    <getLogin.Provider value={{ isLogin, handleLogin, token, handleToken }}>
      {children}
    </getLogin.Provider>
  );
};

export default LoginProvider;
