import React from "react";
import styled from "styled-components";
import SignUpFunction from "./SignUpFunction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Signupform = ({ history }) => {
  return (
    <>
      <Container>
        <h1 title="signup">회원가입</h1>
        <SignUpFunction history={history} />
      </Container>
    </>
  );
};

export default Signupform;
