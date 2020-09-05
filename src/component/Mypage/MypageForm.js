import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CheckingModal from "../../Modal/CheckingModal";

const MypageForm = ({ token }) => {
  const [data, getData] = useState("");
  const url = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(url + "/mypage", {
        headers: {
          "x-access-token": token,
        },
      })
      .then(res => {
        getData(res.data);
      });
  }, []);

  return (
    <>
      <Container>
        <h1 title="mypage">회원정보</h1>
        <div>
          <label>이메일 : </label>
          <label>{data.email}</label>
        </div>
        <div>
          <label>닉네임 : </label>
          <label>{data.nickName}</label>
        </div>
        <div>
          <label>나이대 : </label>
          <label>{data.age}</label>
        </div>
        <div>
          <label>격리된 지역 : </label>
          <label>{data.city}</label>
        </div>
        <CheckingModal>정보수정</CheckingModal>
        <CheckingModal>회원탈퇴</CheckingModal>
      </Container>
    </>
  );
};

export default MypageForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
