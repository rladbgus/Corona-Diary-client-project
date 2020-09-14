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
    border: 0;
    transition: all 1s;
  }

  button:hover {
    transform: scale(1.2);
  }
  .addButton {
    .moreContent {
      font-weight: bold;
      letter-spacing: 10px;
      padding: 10px 10px;
      background: #f5f5f5;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
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
  }

  .contentLinkStyle:hover {
    /* color: #00ce56; */
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
          <div className="moreContent">더보기</div>
        </button>
      </div>
      {/* </div> */}
    </HomeContentsViewStyle>
  );
};

export default withRouter(HomePageContentsView);
