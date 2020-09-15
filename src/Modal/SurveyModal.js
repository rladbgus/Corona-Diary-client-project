import React from "react";
import styled from "styled-components";
import Portal from "./Portal";

const SurveyModal = ({ visible, onClose, children, handleData }) => {
  const handleComplete = () => {
    onClose();
  };

  const handleClose = () => {
    handleData();
    onClose();
  };

  return (
    <Portal elementId={"modal-root"}>
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
          <div className="buttons">
            <button onClick={handleClose}>취소</button>
            <button onClick={handleComplete}>완료</button>
          </div>
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

export default SurveyModal;

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
  max-width: 450px;
  min-width: 450px;
  height: 75%;
  top: 40%;
  transform: translateY(-40%);
  margin: 10px auto;
  padding: 0px 20px;
  padding-top: 25px;

  button {
    float: right;
    margin-top: 20px;
    margin-right: 5px;
    margin-left: 5px;
    color: tomato;
    background-color: transparent;
    border: 0.5px solid tomato;
    border-radius: 5px;
    padding: 5px 7px;
    box-shadow: 2px 2px 2px;
    transition: all 0.5s ease 0s;
  }

  button:hover {
    background-color: crimson;
    color: black;
    transform: translate(0, -5px);
  }

  h3 {
    text-align: center;
  }

  .input_since {
    width: 30px;
  }

  .input_temperature {
    width: 30px;
  }

  .survey-text {
    margin-left: 20px;
    margin-bottom: 7px;
    font-size: 15px;
  }
`;
