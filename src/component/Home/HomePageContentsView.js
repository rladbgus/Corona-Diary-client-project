
import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const HomePageContentsView = ({ history, mainContentList }) => {

  return (
    <HomeContentsViewStyle>
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
          <div className="moreContent">오늘의 일기 더 알아보기</div>
        </button>
      </div>
    </HomeContentsViewStyle>
  );
};

export default withRouter(HomePageContentsView);

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
  }
  button:hover {
    background: #eeeeee;
  }
  .addButton {
    .moreContent {
      font-weight: bold;
      letter-spacing: 2px;
      padding: 20px 100px;
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
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    width: 200px;
    height: 220px;
  }

  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    height: 88px;
  }
  .contentLinkStyle:hover {
  }

  &:hover {
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
    transition: opacity 200ms;
  }
`;




