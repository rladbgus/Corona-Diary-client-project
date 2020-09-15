import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContentsListView = () => {
  const [contentList, setContentList] = useState(null);
  const getToken = window.sessionStorage.getItem("token");
  const [searchList, setSearchList] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    axios
      .get("http://localhost:5000/contentList", {
        headers: { "x-access-token": getToken },
      })
      .then(res => {
        setContentList(res.data.contentList);
        setSearchList(res.data.contentList);
      });

    return () => {
      ac.abort();
    };
  }, []);

  const handelSearch = event => {
    setSearchList(
      contentList.filter(list => list.title.indexOf(event.target.value) !== -1)
    );
  };

  return (
    <Font>
      <center className="ContentsList">
        <div className="SerchInput">
          <i class="fas fa-search fa-1x"></i>
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            onChange={handelSearch}
            defaultValue=""
            className="searchItems"
          ></input>
        </div>

        <Border>
          {searchList
            ? searchList.map(list => (
              <ContentStyle key={list.id}>
                <Link to={`/content/${list.id}`} className="contentLinkStyle">
                  <h1>{list.title}</h1>
                  <span style={{ color: "#005005" }}>{list.createdAt}</span>
                  <p>{list.text}</p>
                </Link>
              </ContentStyle>
            ))
            : ""}
        </Border>
      </center>
    </Font>
  );
};

export default ContentsListView;

const BREAK_POINT_MOBILE = 520;
const BREAK_POINT_TABLET = 1250;

const ContentStyle = styled.span`
    width:17em;
    height: 20em;
    line-height: 40px;
    padding:2.5em;
    margin: 2em 0em 1em 4em;
    background: #ffffff;
    flex-wrap:wrap;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  .contentLinkStyle {
      display:-webkit-box; 
      word-wrap:break-word; 
      -webkit-line-clamp:6; 
      -webkit-box-orient:vertical; 
      overflow:hidden; 
      text-overflow:ellipsis; 
      line-height:2em; 
      height: 20em;
      color:#444; 
      text-decoration:none;
  }
  .contentLinkStyle:hover {
    }

  &:hover {
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
    transition: opacity 200ms;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin: 5em;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin : 2em;
    width: 100%;
    /* height: 5em; */
    input {
      font-size: 15px;
      padding: 10px 5px;
      width: 200px;
    }
    i {
      font-size: 20px;
      padding-left: 45px;
      padding-top: 2%;
    }
  }
`;

const Border = styled.span`
  display : flex;
  flex-wrap: wrap;
  border: 1px solid #66bb6a;
  margin : 4em 6em 7em 5em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  `;

const Font = styled.div`
  font-family: 'S-CoreDream-3Light';
  font-weight: normal;
  font-style: normal;
  line-height : 180%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  position: relative;

  .searchItems {
    display: inline-block;
    width: 350px;
    margin-top: 3em;
    background-color: #f5f5f5;
  }

  i {
      position: absolute;
      margin-left: 20px;
      margin-top: 118px;
      color: #4caf50;
      font-size: 40px;
    }

  input {
      color: #4f5b66;
      padding: 30px 30px 14px 80px;
      font-size: 30px;
      border: none;
      background-color:#ffffff;
      border-bottom: 3px solid #4caf50;
      display:flex;
    }

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin: 5em;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin : 2em;
    width: 100%;
    input {
      font-size: 20px;
      padding: 10px 5px;
      border-width:2%;
      width:2%;
    }
    i {
      display:none;
    }
  }
`;