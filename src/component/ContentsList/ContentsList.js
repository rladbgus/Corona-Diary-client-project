import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentListForm from "./ContentListForm";
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
            placeholder="검색어를 입력하시오"
            onChange={handelSearch}
            defaultValue=""
            className="searchItems"
          ></input>
        </div>

        <div className="ContentListBox">
          {searchList
            ? searchList.map(list => (
              <ContentListForm data={list} key={list.id} />
            ))
            : ""}
        </div>
      </center>
    </Font>
  );
};

export default ContentsListView;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

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
  font-size: 30px;

.ContentListBox {
  /* flex-wrap: wrap; */
  /* background: #ffffff;
  border-style: solid 2px #66bb6a;
  margin: 5px;  */
  }

.searchItems {
  display: inline-block;
  width: 350px;
  margin-top: 3em;
  /* background-color: #4f5b66; */
}

input {
    color: #4f5b66;
    padding: 30px 80px;
    font-size: 30px;
    border: none;
    background-color:#ffffff;
    border-bottom: 3px solid #4f5b66;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
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