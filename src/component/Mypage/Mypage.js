import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MypageForm from "./MypageForm";
import SettingInfo from "./SettingInfo";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Mypage = () => {
  const [change, setChange] = useState(true);
  // const url = "";

  // useEffect(() => {
  //   axios.get(url).then(res => console.log(res));
  //data를 확인해서 들어오는거 MypageForm에 넘겨주기
  // }, []);

  const handleSettingbutton = () => {
    let checking = window.prompt("닉네임을 입력하세요");
    if (checking === "닉네임") {
      //일단 닉네임으로 설정
      setChange(!change);
    } else {
      return alert("닉네임을 잘못 입력했습니다!!");
    }
    setChange(!change);
  };

  const handleModifybutton = () => {
    setChange(!change);
  };

  return (
    <>
      {change ? (
        <Container>
          <MypageForm handleSettingbutton={handleSettingbutton} />
        </Container>
      ) : (
        <Container>
          <SettingInfo handleModifybutton={handleModifybutton} />
        </Container>
      )}
    </>
  );
};

export default Mypage;
