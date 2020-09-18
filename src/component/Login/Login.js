import React, { useState, useContext } from "react";
import { withRouter, useHistory } from "react-router-dom";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";
import styled from "styled-components";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const url = "http://localhost:5000";
  const value = useContext(getLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");
  let history = useHistory();

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const emailHandler = e => {
    setEmail(e.target.value);
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post(url + "/user/login", {
        email: email,
        password: password,
      })
      .then(res => {
        if (res.status === 200) {
          value.handleSetNickName(res.data.nickName);
          getChildren("로그인에 성공했습니다");
          getClassName("login");
          value.handleLogin();
          value.handleToken(res.data.token);
          openModal();
        }
      })
      .catch(() => {
        getChildren("아이디,비밀번호를 확인해주세요");
        getClassName("error");
        return openModal();
      });
  };

  const socialGoogleLogin = async googleToken => {
    await axios
      .post(url + "/user/socialLogin", {
        token: googleToken,
      })
      .then(res => {
        if (res.status === 200) {
          value.handleLogin();
          value.handleToken(res.data.token);
          value.handleSetNickName(res.data.nickName);
          getChildren("로그인에 성공했습니다");
          getClassName("sociallogin");
          openModal();
        }
        if (res.status === 201) {
          history.push({
            pathname: "/user/sociallogin",
            state: res.data.token,
          });
        }
      })
      .catch(() => {
        getChildren("Google 아이디,비밀번호를 확인해주세요");
        getClassName("error");
        return openModal();
      });
  };

  return (
    <LoginStyled>
      <center className="loginName">
        <h1 className="Login">Login</h1>
        <form>
          <div>
            <label>
              <i className="fas fa-user fa-2x" />
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={emailHandler}
              className="input"
            />
          </div>
          <div>
            <label>
              <i className="fas fa-unlock-alt fa-2x" />
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={passwordHandler}
              className="input"
            />
          </div>
          <div>
            <button onClick={submitHandler}>Log in</button>
          </div>
          <GoogleLoginButton>
            <SocialLogin socialGoogleLogin={socialGoogleLogin} />
          </GoogleLoginButton>
        </form>
        <AlertModal visible={modal} onClose={closeModal} className={className}>
          {children}
        </AlertModal>
      </center>
    </LoginStyled>
  );
};

export default withRouter(Login);

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const LoginStyled = styled.div`
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  height: 32em;
  margin: 7% 30% 40% 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  .loginName {
    margin-bottom: 8em;
  }

  i {
    margin-top: 0.4em;
  }

  .input {
    width: 12rem;
    height: 3rem;
    margin: 0rem 0rem 0.1rem 0.7rem;
    font-size: 1.2rem;
  }

  .Login {
    font-size: 4.7rem;
    margin-top: 1.6em;
    margin-bottom: 1.1em;
  }

  html,
  body {
    height: 100%;
  }
  body {
    text-align: center;
  }
  body:before {
    content: "";
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  button {
    background: black;
    color: #fff;
    border: none;
    display: inline-block;
    height: 3rem;
    width: 11rem;
    font-size: 1.25em;
    padding: 0 2em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    margin: 1em 0em 0em 3em;
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

  form {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;

const GoogleLoginButton = styled.div``;
