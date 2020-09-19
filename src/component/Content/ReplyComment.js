import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ReplyComment = ({ data, deleteComment, contentId, allComment }) => {
  const url = "http://localhost:5000/comment";
  const getToken = window.sessionStorage.getItem("token");
  const getNickName = window.sessionStorage.getItem("nickName");
  const [replyComment, setReplyComment] = useState("");
  const [addReply, setAddReply] = useState(false);
  const history = useHistory();
  const depth1Arr = allComment.filter((data) => data.depth === 1);

  const addReplyComment = () => {
    axios
      .post(
        url,
        {
          contentId: contentId,
          comment: replyComment,
          commentId: data.id,
        },
        { headers: { "x-access-token": getToken } }
      )
      .then((res) => {
        setReplyComment("");
        history.go("/");
      });
  };

  const handleReply = (e) => {
    setReplyComment(e.target.value);
  };

  const handleAddReply = () => {
    setAddReply(!addReply);
  };

  return (
    <ReplyCommment>
      <div className="btn">
        {" "}
        {/* 댓글삭제 버튼 */}
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
        {/* 답글달기*/}
        <button onClick={handleAddReply}> 답글 달기 </button>
      </div>

      <br />
      <div style={addReply ? { display: "block" } : { display: "none" }}>
        <input
          placeholder="답글을 작성하세요"
          onChange={handleReply}
          value={replyComment}
        ></input>
        <button onClick={() => addReplyComment(data.id)}>답글 작성</button>

        {/* 답글랜더링 */}
      </div>
      {depth1Arr
        ?.filter((e) => e.group === data.group)
        .map((value) => (
          <ReplyCommentDiv key={value.id}>
            <div className="replyU">
              <div className="replyName">{getNickName}</div>
              <div className="replyDate">{value.createdAt}</div>
            </div>
            <div className="replyComment">{value.comment}</div>
          </ReplyCommentDiv>
        ))}
    </ReplyCommment>
  );
};

export default ReplyComment;

const ReplyCommment = styled.div`
  .btn {
    display: inline-flex;
    margin: 10px;
  }
`;

const ReplyCommentDiv = styled.div`
  display: flex;
  width: 70%;
  border-bottom: 4px solid white;
  margin-top: 20px;
  margin-bottom: 30px;
  flex-direction: row;
  word-break: break-all;

  .replyU {
    display: block;
  }
  .replyName,
  .replyDate {
    width: 170px;
    padding: 5px 10px 0px 10px;
  }

  .replyName {
    font-weight: bold;
  }
  .replyComment {
    justify-content: start;
    padding: 15px 40px 10px 40px;
    text-align: left;
    font-size: 18px;
    line-height: 200%;
  }
`;
