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
          <div className="added-tags-content">추가된 태그</div>
          <div className="tags">
            {arrayTags.length === 0 ? (
              <br />
            ) : (
              arrayTags.map((list, index) =>
                list === "" ? (
                  ""
                ) : (
                  <span className="show-tag">{`#${list} `}</span>
                )
              )
            )}
          </div>
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

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

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

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 2%;
    margin-right: 2%;
    width: 96%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 2%;
    margin-right: 2%;
    width: 96%;
  }
`;

const WritingFormContainer = styled.div`
  h1 {
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
    font-size: 3rem;
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: normal;
  }

  input {
    height: 25px;
    font-size: 17px;
    min-width: 350px;
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: normal;
  }

  li {
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: normal;
    list-style: none;
  }

  textarea {
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: normal;
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
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: normal;
    margin-top: 10px;
    align-self: center;
    text-align: center;
    background: black;
    color: #81c784;
    border: none;
    position: relative;
    height: 2.15rem;
    width: 10.85rem;
    font-size: 1.25em;
    padding: 0 1.5em;
    padding-top: 0.7em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
  }
  label:hover {
    background: #fff;
    color: #1aab8a;
  }
  label:before,
  label:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }
  label:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  label:hover:before,
  label:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }

  .added-tags-content {
    margin-bottom: 0.5rem;
  }

  .show-tag {
    background: #81c784;
    margin-top: 3rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
  }

  .show-tag:hover {
    background: #a1a1a1;
    transition: 800ms ease all;
  }
`;
