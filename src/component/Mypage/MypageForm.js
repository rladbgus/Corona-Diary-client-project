import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const MypageForm = ({ handleSettingbutton, token }) => {
  const [change, setChange] = useState(true);
  const [data, getData] = useState("");
  const url = "http://localhost:5000/mypage";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(res => {
        getData(res.data);
      });
  }, []);

  const handlebutton = () => {
    setChange(!change);
    handleSettingbutton(change);
  };

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
        <button onClick={handlebutton}>정보수정</button>
      </Container>
    </>
  );
};

export default MypageForm;
