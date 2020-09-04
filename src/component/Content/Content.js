import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import "../../style.css";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";

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
  // console.log('토큰 유무: ', value.token);
  // console.log('닉네임', value.nickName);
  
  let splitUrl = window.location.href.split("/");
  let contentId = splitUrl[4];
  
  const [content, setContent] = useState("");
  const [comment, newComment] = useState("");
  const [commented, setCommneted] = useState([]);
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");
  const [deleteState, getDelete] = useState(true);
  const [nickName, setnickName] =useState('');

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(`http://localhost:5000/content/${contentId}`, {
        headers: { "x-access-token": value.token },
      })
      .then(res => {
        console.log(res.data.contentDetail)
        setContent(res.data.contentDetail);
        setnickName(res.data.contentDetail.user.nickName);
        deleteButton();
      });
  }, [commented, nickName]);

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
  console.log(nickName)

  //일기 삭제버튼 생성유무
  const deleteButton = () => {
    console.log(value.nickName)
    console.log(nickName)

    console.log(value.nickName === nickName)
    if( value.nickName === nickName){
      getDelete(!deleteState);
    }
  };
  // console.log('deleteState', deleteState);

  //일기 삭제
  const deleteContent = () => {
    axios.delete(`http://localhost:5000/content/${contentId}`,
    { headers:{"x-access-token": value.token} }
    )
    .then(res => {
      if(res.status === 200){
        getChildren('일기가 삭제되었습니다');
        getClassName('deleteCotent');
        openModal();
      }
    })
    .catch( () => {
      getClassName("deleteCotentError");
      return openModal();
    })
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

          <button onClick={deleteContent} style={deleteState ? { display: "none" } : { display: "block" }}>일기 삭제</button>
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
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {children}
      </AlertModal>
    </center>
  );
};

export default ContentView;
