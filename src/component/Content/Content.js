import React, { useState } from "react";
import styled from "styled-components";
import "../../style.css"

const ContentBox = styled.div`
  background: #FFAC9A;
`;

const CommentBox = styled.div`
  background: #CF9588;
`;

const ContentView = () => {

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
  }

  return (
    <center className="ContentViewBox">
      <ContentBox>
        <div className="Content">
          <input type="text" placeholder="제목을 작성하세요" />
          <br />
          <input type="text" placeholder="내용을 작성하세요" className="textinput" />
          <br />
          <img className="imgpreview" src={imgData} />
          <br />
          <input type="file" onChange={HandleChangeImg} />
          <br />
          {/* <span>태그목록?</span> */}
          <button>좋아요</button>
        </div>
      </ContentBox>

      {/* nickname, 날짜 ,text필요 */}
      <CommentBox>
        <div className="Comment">
          <input type="text" placeholder="댓글을 작성하세요" />
          <button>댓글 작성</button>
          <div>
            <li>작성한 댓글</li>
            <li>작성된 댓글1</li>
            <li>작성된 댓글2</li>
          </div>
        </div>
      </CommentBox>
    </center>
  )
}

export default ContentView;