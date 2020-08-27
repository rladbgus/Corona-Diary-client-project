import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import Signupform from "../component/Signup/SignUpForm";
import styled from "styled-components";

const Shift = styled.div`
  margin-top: 50px;
`;

function SignUp() {
  return (
    <Fragment>
      <Nav />
      <Shift />
      <Signupform />
    </Fragment>
  );
}

export default SignUp;
