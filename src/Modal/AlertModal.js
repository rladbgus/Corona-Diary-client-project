import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import getLogin from "../Context/Context";

const AlertModal = ({ children, visible, onClose, className }) => {
  const value = useContext(getLogin);
  let history = useHistory();

  const handleClose = () => {
    if (className === "complete") {
      onClose();
      value.handleIsChecking();
    } else if (className === "login" || className === "logout" || className === "deleteCotent" || className === "deleteCotentError") {
      onClose();
      history.push("/");
    } else if (className === "signup") {
      onClose();
      history.push("/user/login");
    } else {
      onClose();
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
          <div className="buttons">
            <button onClick={handleClose}>Confirm</button>
          </div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default AlertModal;

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
