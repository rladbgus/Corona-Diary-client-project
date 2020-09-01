import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const SubmitButton = ({ data }) => {
  const url = "http://localhost:5000/content";

  const submitButton = event => {
    event.preventDefault();
    console.log(data, Object.keys(data).length);
    if (Object.keys(data).length !== 12) {
      return alert("빈 항목이 있습니다. 빈 항목을 채워주세요!");
    }
    axios.post(url, data);
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
    </>
  );
};

export default SubmitButton;
