import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const WritingForm = () => {
  return (
    <>
      <Container>
        <h1 title="signup">일기쓰기</h1>
        <div>
          <label>제목</label>
          <input className="input_title" type="text" placeholder="일기제목" />
        </div>
        <div>
          <label>내용</label>
          <textarea
            className="input_content"
            placeholder="내용을 입력하세요"
            type="text"
          />
        </div>
        <div>
          <label>태그</label>
          <input className="input_tag" type="text" />
        </div>
        <div>
          <input className="input_file" type="file" />
        </div>
      </Container>
    </>
  );
};

export default WritingForm;
