import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const EditWritingForm = ({ handleChange, handleTags, content }) => {
  //업로드할 이미지 미리보기
  const [img, setImg] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [tags, getTags] = useState("");
  const [arrayTags, getArrayTasgs] = useState([]);
  const [data, getData] = useState("");

  useEffect(() => {
    getData(content);
  });

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
    <>
      <Container>
        <h1 title="signup">일기 쓰기</h1>
        <div>
          <label>제목</label>
          <input
            name="title"
            className="input_title"
            type="text"
            placeholder="일기제목"
            onChange={handleChange}
            defaultValue={data.title}
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
            defaultValue={data.text}
          />
        </div>
        추가된 태그 :
        {arrayTags.length === 0 ? "" : arrayTags.map(list => `#${list} `)}
        <div>
          <label>태그 추가</label>
          <input
            className="input_tag"
            name="tags"
            type="text"
            value={tags}
            onChange={handleValue}
            onKeyDown={handleKey}
          />
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

export default EditWritingForm;
