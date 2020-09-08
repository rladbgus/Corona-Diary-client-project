import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentListForm from "./ContentListForm";
// import styled from "styled-components";

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
        console.log(res);
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
    <center className="ContentsList">
      <div className="SerchInput">
        <input
          type="text"
          placeholder="검색어를 입력하시오"
          onChange={handelSearch}
          defaultValue=""
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
  );
};

export default ContentsListView;
