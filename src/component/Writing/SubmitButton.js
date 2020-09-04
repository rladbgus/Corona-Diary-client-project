import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const SubmitButton = ({ data, history }) => {
  const url = "http://localhost:5000/content";
  const value = useContext(getLogin);
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const submitButton = event => {
    event.preventDefault();
    if (Object.keys(data).length !== 12) {
      return openModal();
    }
    if (data.title === "") {
      getChildren("제목을 채워주세요");
      getClassName("checktitle");
      return openModal();
    }
    if (data.text === "") {
      getChildren("내용을 채워주세요");
      getClassName("checktext");
      return openModal();
    }
    console.log(data);
    axios
      .post(url, data, {
        headers: {
          "x-access-token": value.token,
        },
      })
      .then(res => {
        console.log(res.data);
        history.push(`/content/${res.data.contentId}`);
      });
  };

  return (
    <>
      <Container>
        <form onSubmit={submitButton}>
          <button type="submit">일기등록</button>
          <Link to="/">
            <button>취소</button>
          </Link>
        </form>
      </Container>
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {children}
      </AlertModal>
    </>
  );
};

export default SubmitButton;
