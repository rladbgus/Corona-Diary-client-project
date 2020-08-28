import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Mypage = () => {
  return (
    <>
      <Container>
        <h1 title="mypage">회원정보</h1>
        <div>
          <label>이메일 : </label>
          <label>blah@naver.com</label>
        </div>
        <div>
          <label>닉네임 : </label>
          <label>blahblah</label>
        </div>
        <div>
          <label>나이대 : </label>
          <label>30</label>
        </div>
        <div>
          <label>격리된 지역 : </label>
          <label>경북</label>
        </div>
        <button>정보수정</button>
        <button>취소</button>
      </Container>
    </>
  );
};

export default Mypage;
