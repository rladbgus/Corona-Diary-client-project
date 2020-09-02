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
    setTrigger(false);
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
            onChange={handleChange}
          />
          <div>
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
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const ModalInput = styled.input``;
