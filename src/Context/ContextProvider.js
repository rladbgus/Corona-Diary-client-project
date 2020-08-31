import React, { useState } from "react";
import getLogin from "./Context";

const LoginProvider = ({ children }) => {
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const [isLogin, setIsLogin] = useState(false);

  return (
    <getLogin.Provider value={{ isLogin, handleLogin }}>
      {children}
    </getLogin.Provider>
  );
};

export default LoginProvider;
