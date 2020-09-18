import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../Context/Context";
import Portal from "./Portal";
import AlertModal from "./AlertModal";

const CheckingModal = ({ children, visible, onClose }) => {
  const url = "http://localhost:5000";
  const [password, getPassWord] = useState("");
  const value = useContext(getLogin);
  const getToken = window.sessionStorage.getItem("token");
  let history = useHistory();
  const [modal, getModal] = useState(false);
  const [childrenAlert, getChildren] = useState("");
  const [className, getClassName] = useState("");

  useEffect(() => {
    let ac = new AbortController();
    return () => {
      ac.abort();
    };
  }, []);

  const openModal = () => {
    getModal(!modal);
  };
  const closeModal = () => {
    getModal(!modal);
  };

  const handleClose = () => {
    getPassWord("");
    onClose();
  };

  const check = () => {
    if (children === "정보수정" || children === "일기수정") {
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
      .post(`${url}/mypage`, data, {
        headers: {
          "x-access-token": getToken,
        },
      })
      .then(res => {
        if (res.status === 200) {
          value.handleIsChecking();
          onClose();
        }
      });
  };

  const handleDelete = () => {
    axios
      .patch(
        `${url}/user/signout`,
        {
          email: "deleted@deleted.com",
        },
        {
          headers: {
            "x-access-token": getToken,
          },
        }
      )
      .then(res => {
        if (res.status === 200) {
          value.handleLogin();
          value.handleToken("");
          getChildren("항상 건강하세요 :)");
          getClassName("removeId");
          openModal();
          onClose();
        }
      });
  };

  const handleChange = event => {
    getPassWord(event.target.value);
  };

  return (
    <Portal elementId={"modal-root"}>
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex="-1" visible={visible}>
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
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {childrenAlert}
      </AlertModal>
    </Portal>
  );
};

export default CheckingModal;

const ModalOverlay = styled.div`
  box-sizing: border-box;
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
  box-sizing: border-box;
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
