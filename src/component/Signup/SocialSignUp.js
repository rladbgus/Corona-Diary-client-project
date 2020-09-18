import React, { useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import AlertModal from "../../Modal/AlertModal";
import styled from "styled-components";

const SocialSignUp = ({ history }) => {
  const url = "http://localhost:5000/user";
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState("0");
  const [city, setCity] = useState("");
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");
  const nickNameCheckingBtn = useRef(0);

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const handleChange = async event => {
    if (event.target.name === "password1") {
      setPassword1(event.target.value);
    }
    if (event.target.name === "password2") {
      setPassword2(event.target.value);
    }
    if (event.target.name === "age") {
      setAge(event.target.value);
    }
    if (event.target.name === "nickName") {
      setNickName(event.target.value);
    }
    if (event.target.name === "city") {
      setCity(event.target.value);
    }
  };

  const nickNameCheckingButton = event => {
    event.preventDefault();
    let checkNickName = {};
    nickNameCheckingBtn.current += 1;
    checkNickName.nickName = nickName.trim();
    if (nickName === "") {
      getChildren("닉네임을 입력 바랍니다.");
      getClassName("inputEmail");
      return openModal();
    }
    if (/\s/.test(nickName, "gi") === true) {
      getChildren("띄워쓰기는 사용불가!");
      getClassName("inputEmail");
      setNickName("");
      return openModal();
    }
    axios
      .post(url + "/signup/nickName", checkNickName)
      .then(res => {
        if (res.status === 200) {
          getChildren("사용할 수 있는 닉네임입니다");
          getClassName("nickNameCheck");
          return openModal();
        } else {
          getChildren("닉네임이 존재합니다.");
          getClassName("nickNameExist");
          setNickName("");
          return openModal();
        }
      })
      .catch(err => {
        if (err) {
          getChildren("서버에러입니다 곧 시정하겠습니다.");
          getClassName("nickNameCheckError");
          return openModal();
        }
      });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (nickNameCheckingBtn.current === 0) {
      getChildren("중복확인을 해주세요");
      getClassName("doubleChecking");
      return openModal();
    }
    let data = {};
    data.password = password2.trim();
    data.nickName = nickName.trim();
    data.age = Number(age);
    data.city = city;
    if (password1 !== password2) {
      getChildren("비밀번호가 일치하지 않습니다.");
      getClassName("passwordcheck1");
      setPassword1("");
      setPassword2("");
      return openModal();
    }
    if (password2.length < 8) {
      getChildren("비밀번호는 8자리 이상으로 설정바랍니다.");
      getClassName("passwordcheck2");
      setPassword1("");
      setPassword2("");
      return openModal();
    }
    if (
      /(\w+\d)|(\d+\w)/.test(password2, "gi") === false ||
      /\s/.test(password2, "gi") === true
    ) {
      getChildren("문자와 숫자 조합으로 만들어 주세요");
      getClassName("passwordcheck3");
      setPassword1("");
      setPassword2("");
      return openModal();
    }
    if (password2 === "" || age === 0 || age === "0" || city === "") {
      getChildren("빈 항목이 있습니다. 채워주세요~");
      getClassName("empty");
      return openModal();
    }
    await axios
      .post(url + "/socialInfo", data, {
        headers: {
          "x-access-token": history.location.state,
        },
      })
      .then(res => {
        getChildren("입력완료!! Google Login 해주세요 :)");
        getClassName("signup");
        return openModal();
      });
  };

  return (
    <Container>
      <h1>Add User Info</h1>
      <SignUp>
        <div>
          <label>비밀번호</label>
          <input
            className="input-password1"
            type="password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>비밀번호확인</label>
          <input
            className="input-password2"
            type="password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>닉네임</label>
          <input
            className="input-nickname"
            type="text"
            name="nickName"
            value={nickName}
            onChange={handleChange}
          />
          <button className="nickname-check" onClick={nickNameCheckingButton}>
            중복확인
          </button>
        </div>
        <div>
          <div className="select-age">나이대</div>
          <select name="age" onChange={handleChange}>
            <option value="0">나이대선택</option>
            <option value="9">10대이하</option>
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
            <option value="70">70대이상</option>
          </select>
        </div>
        <div>
          <label>격리된 지역</label>
          <input
            className="input_location"
            type="text"
            name="city"
            placeholder="ex) Seoul or Busan"
            onChange={handleChange}
          />
        </div>
        <div className="resister-btn">
          <form onSubmit={handleSubmit}>
            <button type="submit">회원가입</button>
            <Link to="/">
              <button>취소</button>
            </Link>
          </form>
        </div>
        <AlertModal visible={modal} onClose={closeModal} className={className}>
          {children}
        </AlertModal>
      </SignUp>
    </Container>
  );
};

export default withRouter(SocialSignUp);

const SignUp = styled.div`
  font-family: "S-CoreDream-3Light";
  font-style: normal;
  font-weight: normal;
  width: 60%;

  .nickname-check {
    float: right;
    width: 5rem;
    height: 2rem;
    font-size: 1rem;
    padding-bottom: 0.2rem;
  }

  .select-age {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 0.3rem;
  }

  div {
    margin-bottom: 2rem;
  }

  label {
    font-size: 1.5rem;
  }

  select {
    height: 2rem;
    font-size: 1.5rem;
  }

  input {
    display: flex;
    align-items: left;
    width: 97%;
    height: 2rem;
    font-size: 1.2rem;
  }

  .resister-btn {
    float: right;
  }
`;

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
