import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import AlertModal from "../../Modal/AlertModal";
const FormData = require("form-data");

const SubmitButton = ({ data, history, image }) => {
  const url = "http://localhost:5000/content";
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");
  const getToken = window.sessionStorage.getItem("token");

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const submitButton = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("imgFile", image);
    formData.append("title", data.title);
    formData.append("text", data.text);
    formData.append("covid_date", data.covid_date);
    formData.append("q_temp", data.q_temp);
    formData.append("q_resp", data.q_resp);
    formData.append("q_cough", data.q_cough);
    formData.append("q_appet", data.q_appet);
    formData.append("q_sleep", data.q_sleep);
    formData.append("q_fatigue", data.q_fatigue);
    formData.append("q_psy", data.q_psy);
    formData.append("tags", data.tags);

    if (!data.title) {
      getChildren("제목을 채워주세요");
      getClassName("checktitle");
      return openModal();
    }
    if (!data.text) {
      getChildren("내용을 채워주세요");
      getClassName("checktext");
      return openModal();
    }

    axios
      .post(url, formData, {
        headers: {
          "x-access-token": getToken,
        },
      })
      .then(res => {
        history.push(`/content/${res.data.contentId}`);
      });
  };

  return (
    <>
      <Container>
        <form>
          <button onClick={submitButton} type="submit">
            일기등록
          </button>
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

const Container = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "S-CoreDream-3Light";
  font-style: normal;
  font-weight: normal;

  button {
    background: black;
    color: white;
    border: none;
    position: relative;
    height: 3rem;
    width: 7rem;
    font-size: 1.25em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    margin: 5px;
    margin-bottom: 6em;
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
`;
