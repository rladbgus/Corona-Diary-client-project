import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import getLogin from "../../Context/Context";
// import { GoogleLogin } from "react-google-login";
import AlertModal from "../../Modal/AlertModal";
import styled from "styled-components";
import user from "../../img/user.png";
import unlock from "../../img/unlock.png";

const Login = () => {
  const value = useContext(getLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");

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
      .post("http://localhost:5000/user/login", {
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

  return (
    <LoginStyled>
      <center className="loginName">
        <h1 className="Login">Login</h1>
        <form>
          <div>
            <label> <img src={user} className="icon" alt="" /> </label>
            <input type="email" placeholder="Email" value={email} onChange={emailHandler} className="input" />
          </div>
          <div>
            <label><img src={unlock} className="icon" alt="" /> </label>
            <input type="password" placeholder="Password" value={password} onChange={passwordHandler} className="input" />
          </div>
          <button onClick={submitHandler}>Log in</button>

          {/* <div>
            <GoogleLogin
              clientId="333133070398-amgnp101osuduqvjn2vacf3p20j2kmgn.apps.googleusercontent.com"
              onSuccess={res => {
                value.handleLogin();
                value.handleToken(res.accessToken);
                getChildren("로그인에 성공했습니다");
                getClassName("login");
                openModal();
              }}
              onFailure={err => {
                console.log(err);
              }}
            />
          </div> */}
        </form>
        <AlertModal visible={modal} onClose={closeModal} className={className}>
          {children}
        </AlertModal>
      </center>
    </LoginStyled>
  );
};

export default withRouter(Login);

const LoginStyled = styled.div`
  font-family: 'S-CoreDream-3Light';
  font-weight: normal;
  font-style: normal;
  line-height : 180%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  position:relative;
  height: 32em;
  margin:4em 40em 0em 38em;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center; 

.loginName{
  margin-bottom:8em;
  }

.icon{
  width: 2.6rem;
  height: 2.6rem;
}

.input{
  width: 10rem;
  height: 3rem;
  margin: 0rem 0rem 0.1rem 0.7rem;
}

.Login{
  font-size:4.7rem;
  margin-top: 1.6em;
  margin-bottom: 1.1em;
}

html,body{
  height:100%;
}
body{
  text-align:center;
}
body:before{
  content:'';
  height:100%;
  display:inline-block;
  vertical-align:middle;
}
button{
  background:black;
  color:#81c784;
  border:none;
  position:relative;
  height:3rem;
  width: 8.5rem;
  font-size:1.25em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  margin: 1em 0em 0em 4.4em;
}
button:hover{
  background:#fff;
  color:#1AAB8A;
}
button:before,button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #1AAB8A;
  transition:400ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,button:hover:after{
  width:100%;
  transition:800ms ease all;
}

`;