import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Signupform = () => {
  return (
    <>
      <Container>
        <h1 title="signup">회원가입</h1>
        <form>
          <div>
            <label>이메일</label>
            <input className="input_email" type="email" />
            <button className="email_check">중복확인</button>
          </div>
          <div>
            <label>비밀번호</label>
            <input className="input_password" type="password" />
          </div>
          <div>
            <label>비밀번호확인</label>
            <input className="input_password_check" type="password" />
          </div>
          <div>
            <label>닉네임</label>
            <input className="input_nickname" type="text" />
            <button className="nickname_check">중복확인</button>
          </div>
          <div>
            <label>나이대</label>
            <input className="input_age" type="text" />
          </div>
          <div>
            <label>격리된 지역</label>
            <input className="input_location" type="text" />
          </div>
          <button type="submit">회원가입</button>
          <button>취소</button>
        </form>
      </Container>
    </>
  );
};

export default Signupform;
