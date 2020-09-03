import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import "../../style.css";
import axios from "axios";
import getLogin from "../../Context/Context";

const ContentBox = styled.div`
  background: #f0cdcd;
`;

const CommentBox = styled.div`
  background: #abe8e1;
`;

const CommentLi = styled.li`
  background: #f7ffaf;
`;

const ContentView = () => {
  const value = useContext(getLogin);
  // console.log('토큰 유무: ", value.token);

  let splitUrl = window.location.href.split("/");
  let contentId = splitUrl[4];

  const [content, setContent] = useState([]);
  const [comment, newComment] = useState("");
  const [commented, setCommneted] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    axios
      .get(`http://localhost:5000/content/${contentId}`, {
        headers: { "x-access-token": value.token },
      })
      .then(res => {
        // console.log(res);
        setContent(res.data.contentDetail);
      });
    return () => {
      ac.abort();
    };
  }, [commented]);

  const allComment = content.comment;

  //댓글창 초기화
  const commentInput = () => {
    newComment('');
  }

  //댓글기능
  const postComment = e => {
    console.log("postComment");
    e.preventDefault();
    setCommneted([comment, ...content.comment]);
    axios
      .post(
        "http://localhost:5000/comment",
        {
          contentId: contentId,
          comment: comment,
        },
        { headers: { "x-access-token": value.token } }
      )
      .then(res => {
        console.log(res);
        commentInput();
      });

  };

  return (
    <center className="ContentViewBox">
      <ContentBox>
        <div className="Content">
          <h1>{content.title}</h1>
          <span>{content.createdAt}</span>
          <div className="TextArea">{content.text}</div>
          <br />
          <div>태그목록</div>
          <button>좋아요</button>
        </div>
      </ContentBox>

      <CommentBox>
        <div className="Comment">
          <input
            type="text"
            placeholder="댓글을 작성하세요"
            value = {comment}
            onChange={e => newComment(e.target.value)}
          />
          <button onClick={postComment}>댓글 작성</button>
          <div>
            {allComment?.map(data => (
              <CommentLi key={data.id}>
                {data.user.nickName}
                <br />
                {data.createdAt}
                <br />
                {data.comment}
              </CommentLi>
            ))}
          </div>
        </div>
      </CommentBox>
    </center>
  );
};

export default ContentView;
