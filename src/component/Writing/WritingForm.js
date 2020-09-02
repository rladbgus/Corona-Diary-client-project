import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const WritingForm = ({ handleChange }) => {
  //업로드할 이미지 미리보기
  const [img, setImg] = useState(null);
  const [imgData, setImgData] = useState(null);

  const HandleChangeImg = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImg(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <Container>
        <h1 title="signup">일기쓰기</h1>
        <div>
          <label>제목</label>
          <input
            name="title"
            className="input_title"
            type="text"
            placeholder="일기제목"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            name="text"
            className="input_content"
            placeholder="내용을 입력하세요"
            type="text"
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label>태그</label>
          <input className="input_tag" type="text" />
        </div> */}
        <div>
          <img className="imgpreview" src={imgData} />
          <br />
          <input type="file" onChange={HandleChangeImg} />
        </div>
      </Container>
    </>
  );
};

export default WritingForm;
