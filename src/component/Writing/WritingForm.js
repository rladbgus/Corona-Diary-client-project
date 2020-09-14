import React, { useState } from "react";
import styled from "styled-components";
import SurveyModal from "../../Modal/SurveyModal";

const WritingForm = ({ handleChange, handleTags, handleImg }) => {
  //업로드할 이미지 미리보기
  const [img, setImg] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [tags, getTags] = useState("");
  const [arrayTags, getArrayTasgs] = useState([]);

  const HandleChangeImg = e => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      handleImg(e.target.files[0]);
    }
  };

  const handleValue = event => {
    getTags(event.target.value);
  };

  const handleKey = event => {
    if (event.key === "Enter") {
      getArrayTasgs(() => {
        arrayTags.push(tags);
        return arrayTags;
      });
      handleTags(arrayTags);
      getTags("");
    }
  };

  return (
    <WritingFormContainer>
      <h1 title="signup">일기 쓰기</h1>
      <Container>
        <ContainerItem>
          <div className="title-content">일기제목</div>
          <input
            name="title"
            className="input-title"
            type="text"
            placeholder="일기제목"
            onChange={handleChange}
          />
        </ContainerItem>
        <ContainerItem>
          <div className="content-content">일기내용</div>
          <textarea
            name="text"
            className="input-content"
            placeholder="내용을 입력하세요"
            type="text"
            onChange={handleChange}
          />
        </ContainerItem>
        <ContainerItem>
          <div className="added-tags-content">추가된 태그</div>
          <div className="tags">
            {arrayTags.length === 0 ? (
              <br />
            ) : (
              arrayTags.map(list => `#${list} `)
            )}
          </div>
        </ContainerItem>
        <ContainerItem>
          <div className="add-tags">태그추가</div>
          <input
            className="input-tag"
            name="tags"
            type="text"
            value={tags}
            onChange={handleValue}
            onKeyDown={handleKey}
          />
        </ContainerItem>
        <ContainerItem>
          <div className="imgpreview">
            <img src={imgData} width="100%" height="100%" />
          </div>
          <label className="input-image-button">
            <input
              type="file"
              onChange={HandleChangeImg}
              className="input-image"
            />
            사진등록
          </label>
        </ContainerItem>
      </Container>
    </WritingFormContainer>
  );
};

export default WritingForm;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0, auto;
  align-items: center;
  padding: 0;
  margin-bottom: 5px;
`;

const ContainerItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 20px;
  padding: 0 5px;
  box-sizing: border-box;
  width: 60%;
`;

const WritingFormContainer = styled.div`
  h1 {
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
  }

  input {
    height: 25px;
    font-size: 17px;
    min-width: 350px;
  }

  li {
    list-style: none;
  }

  textarea {
    height: 400px;
    resize: none;
    font-size: 17px;
    min-width: 350px;
  }

  .imgpreview {
    flex: auto;
    width: 50%;
    min-width: 350px;
    height: 300px;
    min-height: 0;
    margin: 0 auto;
    align-self: center;
    border: 1px solid darkgray;
    margin-top: 20px;
    box-sizing: padding-box;
    background: transparent;
  }

  .input-image {
    display: none;
  }

  label {
    align-self: center;
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 15px;
    font-weight: bold;
    color: rgba(255, 255, 255);
    border: 0;
    border-radius: 5px;
    background: rgba(0, 124, 255, 0.5);
    width: 80px;
    padding: 10px;
    text-align: center;
    transition: all 0.5s ease-out;
    background-position: 1% 50%;
    background-size: 300% 300%;
  }

  label:hover {
    color: rgba(0, 0, 0);
    background: #00ce56;
  }
`;
