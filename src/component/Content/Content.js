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

  //댓글 업로드 기능
  const [comment, changeComment] = useState('');
  const [commented, changeCommneted] = useState(['안녕하세요', '반갑습니다', '식사하셨습니까'])

  const submit = () => {
    changeCommneted([comment, ...commented]);
  }

  return (
    <center className="ContentViewBox">
      <ContentBox>
        <div className="Content">
          <h1>제목</h1>
          <div className="TextArea">내용(사진 첨부)</div>
          <br />
          <div>태그목록</div>
          <button>좋아요</button>
        </div>
      </ContentBox>

      <CommentBox>
        <div className="Comment">
          <input type="text" placeholder="댓글을 작성하세요" onChange={(e) => changeComment(e.target.value)} />
          <button onClick={submit}>댓글 작성</button>
          <div>
            {commented.map((data) => (
              <li>
                {/* 닉네임 */}
                {data}
              </li>
            ))}
          </div>
        </div>
      </CommentBox>
    </center>
  )
}

export default ContentView;


//Post Content  
//작성한유저의 nickname, time, comment

//Get Content  
//해당유저의 title, text
//저장되있는(nickname,time, comment)