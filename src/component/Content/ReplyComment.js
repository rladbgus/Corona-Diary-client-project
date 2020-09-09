import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import axios from "axios";

const ReplyComment = ({ data, deleteComment, contentId }) => {
  const getToken = window.sessionStorage.getItem("token");
  const getNickName = window.sessionStorage.getItem("nickName");
  const [replyComment, setReplyComment] = useState("")
  const [addReplyText, setAddReplyText] = useState(false);

  const addReplyComment = () => {
    axios.post(`http://localhost:5000/comment`,
      {
        // cotentId: contentId,
        comment: replyComment,
        commentId: data.id
      },
      { headers: { "x-access-token": getToken } }
    )
  }

  const handleReply = (e) => {
    setReplyComment(e.target.value);
  }

  const addReply = () => {
    setAddReplyText(!addReplyText);
  }

  return (
    <>
      <button
        onClick={() => deleteComment(data.id)}
        style={
          data.user.nickName === getNickName
            ? { display: "block" }
            : { display: "none" }
        }
      >
        댓글 삭제
    </button>
      <button onClick={addReply}>답글 달기</button>
      <br />
      <div style={addReplyText ? { display: "block" } : { display: "none" }}>
        <input placeholder="답글을 작성하세요" onChange={handleReply} value={replyComment}></input>
        <button
          onClick={() => addReplyComment(data.id)}
        >
          답글 작성
    </button>
      </div>
    </>
  );
};

export default ReplyComment;
