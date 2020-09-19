import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";
import heart from "../../img/heart.png";
import unheart from "../../img/unheart.png";
import EditWritingPageForm from "./Edit/EditWritingPageForm";
import Tags from "./Tags";
import CheckingModal from "../../Modal/CheckingModal";
import example from "../../img/corona_logo.png";
import ReplyComment from "./ReplyComment";
import { useHistory } from "react-router-dom";

const ContentView = () => {
  const url = `http://localhost:5000`;
  let splitUrl = window.location.href.split("/");
  let contentId = splitUrl[4];
  const value = useContext(getLogin);
  const [content, setContent] = useState("");
  const [comment, newComment] = useState("");
  const [commented, setCommneted] = useState([]);
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");
  const [deleteState, getDelete] = useState(true);
  const [nickName, setnickName] = useState("");
  const getToken = window.sessionStorage.getItem("token");
  const [countLike, setCountLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [tags, getTags] = useState([]);
  const [checkModal, getCheckModal] = useState(false);
  const [commentId, getCommentId] = useState("");
  const history = useHistory();

  const openModalModify = () => {
    getCheckModal(!checkModal);
    getChildren("일기수정");
  };
  const closeCheckModal = () => {
    getCheckModal(!checkModal);
  };
  const openModal = () => {
    getModal(!modal);
  };
  const closeModal = () => {
    getModal(!modal);
  };

  useEffect(() => {
    const ac = new AbortController();
    const getNickName = window.sessionStorage.getItem("nickName");

    axios
      .get(`${url}/content/${contentId}`, {
        headers: { "x-access-token": getToken },
      })
      .then(res => {
        setContent(res.data.Content);
        setnickName(res.data.Content.user.nickName);
        getTags(res.data.Content.tag);
        setCountLike(res.data.like);
        setIsLike(res.data.userLike);
        if (getNickName === nickName) {
          deleteButton();
        }
      })
      .catch(() => {
        if (!getToken) {
          getChildren("로그인 후 이용하실 수 있습니다^^");
          getClassName("content");
          openModal();
        } else {
          getChildren("존재하지 않는 페이지입니다.");
          getClassName("content");
          openModal();
        }
      });
    return () => {
      ac.abort();
    };
  }, [commented, nickName]);

  const allComment = content.comment;

  // 좋아요 증감
  const setLikeBtn = () => {
    axios
      .post(
        `${url}/content/${contentId}/like`,
        { like: countLike },
        { headers: { "x-access-token": getToken } }
      )
      .then(res => {
        setCountLike(res.data.count);
        setIsLike(res.data.like);
      });
  };

  //댓글기능
  const postComment = e => {
    e.preventDefault();
    setCommneted([comment, ...content.comment]);
    axios
      .post(
        `${url}/comment`,
        {
          contentId: contentId,
          comment: comment,
        },
        { headers: { "x-access-token": getToken } }
      )
      .then(() => {
        newComment("");
        history.go("/");
      });
  };

  //댓글 삭제
  const deleteComment = value => {
    axios
      .delete(`${url}/comment/${value}`, {
        headers: { "x-access-token": getToken },
      })
      .then(() => {
        getChildren("댓글이 삭제되었습니다");
        getClassName("deleteComment");
        getCommentId(value);
        openModal();
      })
      .catch(() => {
        getChildren("삭제 권한이 없습니다");
        getClassName("deleteComment");
        openModal();
      });
  };

  //일기 삭제버튼 생성유무
  const deleteButton = () => {
    getDelete(!deleteState);
  };

  //일기 삭제
  const deleteContent = () => {
    axios
      .delete(`${url}/content/${contentId}`, {
        headers: { "x-access-token": getToken },
      })
      .then(res => {
        if (res.status === 200) {
          getChildren("일기가 삭제되었습니다");
          getClassName("deleteCotent");
          openModal();
        }
      })
      .catch(() => {
        getClassName("deleteCotentError");
        return openModal();
      });
  };

  return (
    <center className="ContentViewBox">
      <>
        {!value.isChecking ? (
          <>
            <ContentBox>
              <div className="Content">
                <h1>{content.title}</h1>
                <span className="contentDate">{content.createdAt}</span>
                {content.referenceFile ? (
                  <img
                    src={content.referenceFile}
                    className="mainImg"
                    alt=""
                    width="420"
                    height="400"
                  />
                ) : (
                  <img className="mainImg" src={example} alt="" width="420" height="400" />
                )}

                <div className="TextArea">{content.text}</div>
                <br />
                <div className="tagStyle">
                  <Tags data={tags} />
                </div>
                <LikeButton>
                  {isLike ? (
                    <img
                      className="LikeImg"
                      src={heart}
                      alt=""
                      onClick={setLikeBtn}
                    />
                  ) : (
                    <img
                      className="LikeImg"
                      src={unheart}
                      alt=""
                      onClick={setLikeBtn}
                    />
                  )}
                  {countLike !== 0 ? <span>{countLike}</span> : <span>0</span>}
                </LikeButton>
                <div className="btn">
                  <button
                    onClick={openModalModify}
                    style={
                      deleteState ? { display: "none" } : { display: "block" }
                    }
                    className="btn-style"
                  >
                    일기수정
                  </button>
                  <CheckingModal visible={checkModal} onClose={closeCheckModal}>
                    {children}
                  </CheckingModal>
                  <button
                    onClick={deleteContent}
                    style={
                      deleteState ? { display: "none" } : { display: "block" }
                    }
                    className="btn-style"
                  >
                    일기삭제
                  </button>
                </div>
              </div>
            </ContentBox>
            <CommentBox>
              <div className="Comment">
                <input
                  type="text"
                  placeholder="댓글을 작성하세요"
                  value={comment}
                  onChange={e => newComment(e.target.value)}
                />
                <button onClick={postComment}>댓글 작성</button>
                <>
                  {allComment
                    ?.filter(value => value.depth === 0)
                    .map(data => (
                      <CommentLi key={data.id}>
                        <div className="comment">
                          <div className="commentU">
                            <div className="commentUser">
                              {data.user.nickName}
                            </div>
                            <div className="commentDate">{data.createdAt}</div>
                          </div>

                          <div className="commentStyle">{data.comment}</div>
                        </div>
                        <ReplyComment
                          data={data}
                          deleteComment={deleteComment}
                          contentId={contentId}
                          allComment={allComment}
                        ></ReplyComment>
                      </CommentLi>
                    ))}
                </>
              </div>
            </CommentBox>
          </>
        ) : (
          <Container>
            <EditWritingPageForm content={content} token={getToken} />
          </Container>
        )}
      </>
      <AlertModal
        visible={modal}
        onClose={closeModal}
        className={className}
        commentId={commentId}
      >
        {children}
      </AlertModal>
    </center>
  );
};
export default ContentView;

const BREAK_POINT_MOBILE = 580;

const ContentBox = styled.div`
  background: #f5f5f5;
  border: 40px solid white;
  border-radius: 50px;
  
  .Content {
  }

  h1 {
    font-size: 200%;
    padding: 30px 0px 10px 0px;
    letter-spacing: 10px;
    line-height: 160%;
    margin: 0% 7%;
  }

  .contentDate {
    display: block;
    padding: 0px 0px 30px 0px;
  }

  img {
    padding: 0px 0px 30px 0px;
  }

  .TextArea {
    margin: 0% 20%;
    text-align: left;
    font-size: 18px;
    line-height: 200%;
    word-break: break-all;
  }
  .tagStyle {
    margin: 0% 20%;
    text-align: right;
  }

  .btn {
    display: inline-flex;
    padding: 0px 50px 30px 50px;
  }

  .btn-style {
    background: black;
    color: white;
    border: none;
    position: relative;
    font-size: 1em;
    font-weight: bold;

    cursor: pointer;
    transition: 800ms ease all;
    outline: none;

    line-height: 40px;
    margin: 0px 10px;
    padding: 0px 20px;
  }
  .btn-style:hover {
    background: #fff;
    color: #1aab8a;
  }
  .btn-style:before,
  .btn-style:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }
  .btn-style:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  .btn-style:hover:before,
  .btn-style:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {

    h1{
      font-size: 32px;
    }
    .contentDate{
      font-size: 16px;
      letter-spacing: 3px;
    }
    .TextArea{
      font-size: 16px;
      letter-spacing: 3px;
    }

    .mainImg{
      width: 200px;
      height: 200px;
    }
  }
`;

const LikeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 20px 0px 0px 0px;

  img {
    height: 30px;
  }

  span {
    margin-left: 10px;
  }
`;

const CommentBox = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  word-break: break-all;

  input {
    margin: 5px 10px 5px 0px;
    resize: none;
    width: 80%;
    font-size: 1rem;
    line-height: 1.75;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(233, 236, 239);
    border-radius: 4px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-align: start;
  }

  button {
    background: black;
    color: white;
    border: none;
    position: relative;
    font-size: 0.7em;
    font-weight: bold;

    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    line-height: 40px;
    margin: 0px 10px;
    padding: 0px 20px;
  }
  button:hover {
    background: #fff;
    color: #1aab8a;
  }
  button:before,
  button:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }
  button:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  button:hover:before,
  button:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;
const CommentLi = styled.li`
  border: none;
  border-bottom: 4px solid #e0e0e0;
  border-right: 4px solid #e0e0e0;
  border-radius: 20px;
  list-style: none;

  .comment {
    display: flex;
  }
  .commentU {
    display: block;
    border-right: 4px solid white;
  }
  .commentUser,
  .commentDate {
    width: 170px;
    padding: 20px 10px 0px 10px;
  }
  .commentUser {
    font-weight: bold;
  }
  .commentStyle {
    display: flex;
    justify-content: start;
    padding: 15px 40px 10px 40px;
    text-align: left;
    font-size: 18px;
    line-height: 200%;
  }
`;

const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px; */
`;
