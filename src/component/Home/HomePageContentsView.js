import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

const HomeContentsViewStyle = styled.div`
  text-align: center;

  .homeContentsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  button {
    color: black;
    border-radius: 2px;
    background: #fff;
    border: 1px solid #d9d9d9;
    /* transition: all 1s; */
  }

  button:hover {
    /* transform: scale(1.2); */
    background: #eeeeee;
  }
  .addButton {
    .moreContent {
      font-weight: bold;
      letter-spacing: 2px;
      padding: 20px 100px;
      /* background: #F5F5F5; */
      /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); */
    }
  }
`;

const MainContent = styled.div`
  background: #ffffff;
  margin: 20px;
  padding: 70px 100px;
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  .contentLinkStyle {
    text-decoration: none;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* -webkit-line-clamp: 6; 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    width: 170px;
    height: 160px;
  }

  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
  .contentLinkStyle:hover {
    /* color: #00CE56; */
  }

  &:hover {
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
    transition: opacity 200ms;
  }
`;

const HomePageContentsView = ({ history }) => {
  const [mainContentList, setMainCotentList] = useState(null);
  const getToken = window.sessionStorage.getItem("token");

  useEffect(() => {
    let ac = new AbortController();
    axios
      .get("http://localhost:5000/mainContentList", {
        headers: { "x-access-token": getToken },
      })
      .then((res) => {
        setMainCotentList([...res.data.contentList]);
      });
    return () => {
      ac.abort();
    };
  }, []);

  return (
    <HomeContentsViewStyle>
      {/* <div className="homeContentsView"> */}
      <div className="homeContentsContainer">
        {mainContentList?.map((data) => (
          <MainContent key={data.id}>
            <Link className="contentLinkStyle" to={`/content/${data.id}`}>
              <h1>{data.title}</h1>
              <span>{data.createdAt}</span>
              <p>{data.text}</p>
            </Link>
          </MainContent>
        ))}
      </div>
      <div className="addButton">
        <button onClick={() => history.push("./contentslist")}>
          {/* <i class="far fa-plus-square fa-4x"></i> */}
          <div className="moreContent">오늘의 일기 더 알아보기</div>
        </button>
      </div>
      {/* </div> */}
    </HomeContentsViewStyle>
  );
};

export default withRouter(HomePageContentsView);
