import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import "../../style.css"
import axios from "axios";
import getLogin from "../../Context/Context";

const ContentBox = styled.div`
  background: #FFAC9A;
`;

const CommentBox = styled.div`
  background: #CF9588;
`;

const ContentView = () => {

  const value = useContext(getLogin);
  // console.log(value.token);

  //해당 아이디값 가져오기
  let splitUrl = window.location.href.split('/')
  console.log(splitUrl);
  let contentId = splitUrl[4];
  console.log(contentId);

  //불러온 content 저장할 변수
  const [content, setContent] = useState([]);

  //해당 content 불러오기
  useEffect(() => {
    axios.get(`http://localhost:5000/content/${contentId}`,
      {
        headers:
          { "x-access-token": value.token }
      })
      .then(res => {
        // console.log(res.data.result);
        setContent(res.data.result);
      });
  }, []);

  console.log(content);


  //댓글 업로드 기능
  const [comment, changeComment] = useState('');

  //기존댓글 불러오기(작성된글 불러와 댓글가져오기)
  const [commented, changeCommneted] = useState(['안녕하세요', '반갑습니다', '식사하셨습니까'])

  const postCommnet = (e) => {
    e.preventDefault();
    changeCommneted([comment, ...commented]);
    axios.post("http://localhost:5000/comment",
      {
        comment: comment
      },
      { headers: { "x-access-token": value.token } }
    )
      .then(res => {
        console.log(res);
        // e.target.reset();
      })
  }

  return (
    <center className="ContentViewBox">
      <ContentBox>
        <div className="Content">
          <h1>{content.title}</h1>
          <div className="TextArea">{content.text}</div>
          <br />
          <div>태그목록</div>
          <button>좋아요</button>
        </div>
      </ContentBox>

      <CommentBox>
        <div className="Comment">
          <input type="text" placeholder="댓글을 작성하세요" onChange={(e) => changeComment(e.target.value)} />
          <button onClick={postCommnet}>댓글 작성</button>
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