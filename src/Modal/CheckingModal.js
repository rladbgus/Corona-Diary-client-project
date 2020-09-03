import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../Context/Context";

const CheckingModal = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [password, getPassWord] = useState("");
  const value = useContext(getLogin);
  const url = "http://localhost:5000";
  let history = useHistory();

  const handleOpen = () => {
    setTrigger(true);
  };

  const handleClose = () => {
    getPassWord("");
    setTrigger(false);
    //input 내용 초기화
    // document.querySelector('.modal-input').value===''
    // let query = document.querySelector(".modal-input");
    // console.log(query); // <input> ~~ <input> value는 없음
  };

  const check = () => {
    if (children === "정보수정") {
      handleChecking();
    }
    if (children === "회원탈퇴") {
      handleDelete();
    }
  };

  const handleChecking = () => {
    let data = {};
    data.password = password;
    axios
      .post(url + "/mypage", data, {
        headers: {
          "x-access-token": value.token,
        },
      })
      .then(res => {
        if (res.status === 200) {
          value.handleIsChecking();
          handleClose();
        } else {
          return alert("잘못된 비밀번호 입니다.");
        }
      });
  };

  const handleDelete = () => {
    axios
      .patch(
        url + "/user/signout",
        {
          email: "deleted@deleted.com",
        },
        {
          headers: {
            "x-access-token": value.token,
          },
        }
      )
      .then(res => {
        if (res.status === 200) {
          value.handleLogin();
          value.handleToken("");
          value.handleGoogleToken("");
          history.push("/");
          handleClose();
        } else {
          return alert("잘못된 비밀번호 입니다.");
        }
      });
  };

  const handleChange = event => {
    getPassWord(event.target.value);
  };

  return (
    <>
      <button onClick={handleOpen}>{children}</button>
      <ModalOverlay visible={trigger} />
      <ModalWrapper tabIndex="-1" visible={trigger}>
        <ModalInner tabIndex="0" className="modal-inner">
          <ModalInput
            type="password"
            className="modal-input"
            placeholder="비밀번호를 입력하세요!"
            value={password}
            onChange={handleChange}
          />
          <div className="buttons">
            <button onClick={handleClose}>Close</button>
            <button onClick={check}>Checking</button>
          </div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default CheckingModal;

const ModalOverlay = styled.div`
  box-sizin: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const ModalWrapper = styled.div`
  box-sizin: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 40%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0px 20px;
  padding-top: 25px;
  padding-bottom: 40px;

  button {
    float: right;
    margin-right: 5px;
    margin-left: 5px;
    color: tomato;
    background-color: transparent;
    border: 0.5px solid tomato;
    border-radius: 5px;
    padding: 5px 7px;
    box-shadow: 2px 2px 2px;
    transition: all 0.3s ease 0s;
  }

  button:hover {
    background-color: crimson;
    color: black;
    transform: translate(0, -5px);
  }
`;

const ModalInput = styled.input`
  width: 250px;
  margin-bottom: 15px;
`;
