import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import LoginView from "../component/Login/Login";

const Login = () => {
  return (
    <div>
      <Fragment>
        <Nav />
        <LoginView />
      </Fragment>
    </div>
  );
};

export default Login;