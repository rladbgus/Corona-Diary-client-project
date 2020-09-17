import React from "react";
import styled from "styled-components";
import SignUpFunction from "./SignUpFunction";

const Signupform = ({ history }) => {
  return (
    <>
      <Container>
        <h1 title="signup">SignUp</h1>
        <SignUpFunction history={history} />
      </Container>
    </>
  );
};

export default Signupform;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  height: 50em;
  display: -webkit-flex;
  display: inline-block;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  min-width: 250px;
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
  transform: translateY(5%);

  h1 {
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    position: relative;
    bottom: 1rem;
  }

  button {
    background: black;
    color: #81c784;
    border: none;
    position: relative;
    height: 2.2rem;
    width: 7rem;
    font-size: 1.25em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    margin: 5px;
    margin-bottom: 0px;
  }

  button:hover {
    background: #fff;
    color: #1aab8a;
  }

  button:before,
  button:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }

  button:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  button:hover:before,
  button:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 2%;
    margin-right: 2%;
    width: 96%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 2%;
    margin-right: 2%;
    width: 96%;
  }
`;
