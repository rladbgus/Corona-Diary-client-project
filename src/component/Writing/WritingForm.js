import React, { useState } from "react";
import styled from "styled-components";

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
    <Font>
      <Title>
        <span className="icon">
          <i class="fab fa-cuttlefish fa-2x" />
        </span>
          Today's Record
        </Title>

      <Container>
        <ContainerItem>
          <div className="content">일기제목</div>
          <input
            name="title"
            className="input-title"
            type="text"
            placeholder="  제목을 입력하세요"
            onChange={handleChange}
          />

          <div className="content">일기내용</div>
          <textarea
            name="text"
            className="input-content"
            placeholder=" 내용을 입력하세요"
            type="text"
            onChange={handleChange}
          />

          <span className="content"> #태그목록
          <span className="input-tag">
              {arrayTags.length === 0 ? (
                <br />
              ) : (
                  arrayTags.map(list => `#${list} `)
                )}
            </span>
          </span>
          <span className="content">#태그추가
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

          <input
            type="file"
            onChange={HandleChangeImg}
            className="input-image"
          />

        </ContainerItem>
      </Container>
    </Font >
  );
};

export default WritingForm;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1111;

const Font = styled.div`     
font-family: 'S-CoreDream-3Light';
font-weight: normal;
font-style: normal;
line-height : 180%;

.input-image{
font-size: 0.9em;
margin-bottom: 0.7rem;
}

.input-tag {
  margin-left: 0.8em;
  margin-bottom:0.5em;
}

.content{
  margin: 1em 0em 0.4em 0em;
}

.icon {
  color: #4caf50;
  margin-right:7px;
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
  margin-bottom:1em;
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
 margin : 1.9em 8em 1em 4.4em;
 font-size: 50px;
 color:#484848; 

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
  margin: 0, auto;
  align-items: center;
  padding: 0;
  margin-bottom: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border: 1px solid #66bb6a;
  margin : 3em 13em 4em 13em;
`;

const ContainerItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  padding: 0 5px;
  box-sizing: border-box;
  width: 78%;
  font-size: 1.5rem;
`;