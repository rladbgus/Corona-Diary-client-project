import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import LoginView from "../component/Login/Login";

const Shift = styled.div`
  margin-top: 100px;
`;

const Login = () => {
  return (
    <div>
      <Fragment>
        <Nav />
        <Shift />
        <LoginView />
      </Fragment>
    </div>
  );
};

export default Login;