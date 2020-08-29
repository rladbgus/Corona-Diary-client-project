import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignUpFunction from "./SignUpFunction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Signupform = () => {
  return (
    <>
      <Container>
        <h1 title="signup">회원가입</h1>
        <SignUpFunction />
      </Container>
    </>
  );
};

export default Signupform;
