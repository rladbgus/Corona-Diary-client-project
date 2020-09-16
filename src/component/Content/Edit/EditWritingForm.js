import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EditWritingForm = ({ handleChange, handleTags, content, handleImg }) => {
  //업로드할 이미지 미리보기
  const [img, setImg] = useState(null);
  const [imgData, setImgData] = useState(content.referenceFile);
  const [tags, getTags] = useState("");
  const [arrayTags, getArrayTasgs] = useState([]);
  const [data, getData] = useState("");

  useEffect(() => {
    getData(content);
  });

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

  const handleTagList = index => {
    getArrayTasgs(arrayTags.filter((x, i) => index !== i));
  };

  useEffect(() => {
    handleTags(arrayTags);
  }, [arrayTags]);

  return (
    <Font>
      <Title>
        <span className="icon">
          <i className="fab fa-cuttlefish fa-2x" />
        </span>
        Diary Edit
      </Title>

      <Container>
        <ContainerItem>
          <div className="content">일기제목</div>
          <input
            name="title"
            className="input-title"
            type="text"
            defaultValue={content.title}
            onChange={handleChange}
          />

          <div className="content">일기내용</div>
          <textarea
            name="text"
            className="input-content"
            defaultValue={content.text}
            type="text"
            onChange={handleChange}
          />
          <div className="content">
            <div className="tagList">#태그목록</div>
            <div className="added-tag-list">
              {arrayTags.map((list, index) =>
                list === "" ? (
                  ""
                ) : (
                  <span className="show-tag" key={index}>
                    {`#${list} `}
                    <button
                      className="closeBtn"
                      onClick={() => {
                        handleTagList(index);
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </span>
                )
              )}
            </div>
          </div>
          <div className="content">
            #태그추가
            <span>
              <input
                className="input-tag"
                name="tags"
                type="text"
                value={tags}
                placeholder="  입력 후 'Enter'를 쳐주세요!"
                onChange={handleValue}
                onKeyDown={handleKey}
              />
            </span>
          </div>
          <input
            type="file"
            onChange={HandleChangeImg}
            className="input-image"
          />
        </ContainerItem>
      </Container>
    </Font>
  );
};

export default EditWritingForm;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1111;

const Font = styled.div`
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;

  .tagList {
    margin-bottom: 0.5rem;
  }
  .added-tag-list {
    display: inline;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin: 1em 0em 0.4em 1em;
  }

  .show-tag {
    display: inline-block;
    background: #81c784;
    margin-right: 2px;
    margin-top: 3px;
    padding: 0.3rem;
    .closeBtn {
      display: none;
    }
  }

  .show-tag:hover {
    background: #a1a1a1;
    transition: 200ms ease all;
    .closeBtn {
      display: inline;
      align-items: center;
      background: transparent;
      border: none;
    }
  }

  .input-image {
    font-size: 0.9em;
    margin-bottom: 0.7rem;
  }

  .input-tag {
    display: block;
    margin-left: 0.8em;
    margin-bottom: 5em;
    margin-top: 1em;
    width: 70%;
    min-width: 300px;
  }

  .icon {
    color: #4caf50;
    margin-right: 7px;
    font-size: 2.7rem;
  }

  input {
    height: 40px;
    font-size: 20px;
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
    margin-bottom: 1em;
  }

  textarea {
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: normal;
    height: 400px;
    resize: none;
    font-size: 20px;
    min-width: 350px;
  }
`;

const Title = styled.h1`
  margin: 1.9em 8em 0 0;
  font-size: 50px;
  color: #484848;
  width: 400px;

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 15px;
    padding-left: 45px;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 35px;
    font-weight: 530;
    letter-spacing: 15px;
    padding-left: 45px;
  }
`;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin-bottom: 24px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid #66bb6a;
  width: 100%;
  min-width: 400px;
`;

const ContainerItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  padding: 0 5px;
  box-sizing: border-box;
  width: 78%;
  font-size: 1.5rem;

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
