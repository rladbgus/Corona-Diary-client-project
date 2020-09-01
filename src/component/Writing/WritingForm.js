import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const WritingForm = () => {

  //업로드할 이미지 미리보기
  const [img, setImg] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [referenceFile, setReferenceFile] = useState("");

  const HandleChangeImg = e => {
    if (e.target.files[0]) {
      setReferenceFile(e.target.files[0].name)
      setImg(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
    console.log(referenceFile);
    console.log("picture: ", e.target.files[0].name);
  }

  //제목,내용 onchange
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const textHandler = (e) => {
    setText(e.target.value);
  }



  return (
    <>
      <Container>
        <h1 title="signup">일기쓰기</h1>
        <div>
          <label>제목</label>
          <input className="input_title" type="text" placeholder="일기제목" onChange={titleHandler} />
        </div>
        <div>
          <label>내용</label>
          <textarea
            className="input_content"
            placeholder="내용을 입력하세요"
            type="text" onChange={textHandler}
          />
        </div>
        <div>
          <label>태그</label>
          <input className="input_tag" type="text" />
        </div>
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
