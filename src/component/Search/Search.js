import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchComponent = () => {
  const getToken = window.sessionStorage.getItem("token");
  const [searchList, setSearchList] = useState("");
  const [contentList, setContentList] = useState(null);
  const url = "http://localhost:5000/contentList";

  useEffect(() => {
    const ac = new AbortController();
    axios
      .get(url, {
        headers: { "x-access-token": getToken },
      })
      .then((res) => {
        setContentList(res.data.contentList);
        setSearchList("");
      });

    return () => {
      ac.abort();
    };
  }, []);

  const handelSearch = (event) => {
    setSearchList(
      contentList.filter(
        (list) => list.title.indexOf(event.target.value) !== -1
      )
    );
  };

  return (
    <Font>
        <i className="fas fa-search fa-1x"></i>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          onChange={handelSearch}
          className="searchItems"
        />

      <div className="searchBox">
           {searchList
          ? searchList.map((list) => (
            <Searched key={list.id} className="searched">
              <Link to={`/content/${list.id}`} className="contentLinkStyle">
                <h1>{list.title}</h1>
                <span style={{ color: "#005005" }}>{list.createdAt}</span>
                <p>{list.text}</p>
              </Link>
            </Searched>
          ))
          : <span className= "empty"></span> }
      </div>
    </Font>
  );
};

export default SearchComponent;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Font = styled.div`
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;
  

  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

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
    color: #4f5b66;
    font-size: 40px;
  }

  input {
    color: #4f5b66;
    padding: 30px 30px 14px 80px;
    font-size: 30px;
    border: none;
    background-color: #ffffff;
    border-bottom: 3px solid #4f5b66;
    display: flex;
  }

  .searchBox{
    width: 50em;
    flex-wrap: wrap;
    height: 23em;
    display: flex;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    margin: 4em 0em 0em 23em;
    border: 1px solid #66bb6a;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-right: 0px;
    width: 100%;
    input {
      font-size: 15px;
      padding: 10px 5px;
      width: 200px;
    }
    i {
      display: none;
    }
  }
  `;

const Searched = styled.span`
width: 17em;
height: 15em;
line-height: 40px;
padding: 2.5em;
margin: 3%;
background: #ffffff;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

.contentLinkStyle {
  line-height: 2em;
  height: 17em;
  color: #444;
  text-decoration: none;
}

.contentLinkStyle:hover {
}
h1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  height: 134px;
}

&:hover {
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
  transition: opacity 200ms;
}
`;