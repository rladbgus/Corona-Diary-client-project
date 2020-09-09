import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";
const FormData = require("form-data");

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
  const getToken = window.sessionStorage.getItem("token");
  // const [alldata, setAllData] = useState({ data: data });

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const submitButton = (event) => {
    event.preventDefault();

    const formData = new FormData();
    // formData.append("imgFile", "");
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


    if (Object.keys(data).length !== 11) {
      getChildren("빈 항목이 있습니다. 채워주세요");
      getClassName("checktdata");
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
    console.log(formData.get("title"));
    console.log(formData.get("text"));

    axios
      .post(url, formData, {
        headers: {
          "x-access-token": getToken,
        },
      })
      .then((res) => {
        console.log(res.data);
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
