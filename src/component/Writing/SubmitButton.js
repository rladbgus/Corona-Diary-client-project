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

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const submitButton = event => {
    event.preventDefault();
    if (Object.keys(data).length !== 11) {
      return openModal();
    }
    axios
      .post(url, data, {
        headers: {
          "x-access-token": value.token,
        },
      })
      .then(res => console.log(res));
    history.push("/content");
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
      <AlertModal visible={modal} onClose={closeModal} className="writing">
        "빈 항목이 있습니다. 빈 항목을 채워주세요!"
      </AlertModal>
    </>
  );
};

export default SubmitButton;
