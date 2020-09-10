import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
const ReplyCommentLi = styled.li`
background: #EFDB64;
`;

const ReplyComment = ({ data, deleteComment, contentId, allComment }) => {
  const getToken = window.sessionStorage.getItem("token");
  const getNickName = window.sessionStorage.getItem("nickName");
  const [replyComment, setReplyComment] = useState("")
  const [addReply, setAddReply] = useState(false);
  const history = useHistory();
  const depth1Arr = allComment.filter(data =>
    data.depth === 1
  );

  const addReplyComment = () => {
    axios.post(`http://localhost:5000/comment`,
      {
        contentId: contentId,
        comment: replyComment,
        commentId: data.id
      },
      { headers: { "x-access-token": getToken } }
    )
      .then(res => {
        setReplyComment('')
        history.go("/");
      })
  }

  const handleReply = (e) => {
    setReplyComment(e.target.value);
  }

  const handleAddReply = () => {
    setAddReply(!addReply);
  }

  return (
    <>
      {/* 댓글삭제 버튼 */}
      <button
        onClick={() => deleteComment(data.id)}
        style={
          data.user.nickName === getNickName
            ? { display: "block" }
            : { display: "none" }
        }
      > 댓글 삭제 </button>

      {/* 답글달기*/}
      <button onClick={handleAddReply}> 답글 달기 </button>
      <br />
      <div style={addReply ? { display: "block" } : { display: "none" }}>
        <input placeholder="답글을 작성하세요" onChange={handleReply} value={replyComment}></input>
        <button
          onClick={() => addReplyComment(data.id)}
        >
          답글 작성
    </button>

        {/* 답글랜더링 */}
      </div>
      {depth1Arr?.filter((e) => (e.group === data.group)).map(value => (
        <ReplyCommentLi>
          {getNickName}
          <br />
          {value.createdAt}
          <br />
          {value.comment}
        </ReplyCommentLi>
      ))}
    </>
  );
};

export default ReplyComment;
