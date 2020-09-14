import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Font = styled.div`     
font-family: 'S-CoreDream-3Light';
font-weight: normal;
font-style: normal;
line-height : 180%;
`;

// const Border1 = styled.div`
//   display: relative;
//   width: 100%;
//   border: 1px solid #e1ffb1;
//   background-color: #e1ffb1;
// `;

const Border2 = styled.div`
  border: 1px solid #aed581;
  margin : 7em;
  background-color: #aed581;
  display : flex;
  justify-content: space-around;
  flex-wrap: wrap;
  `;

const ContentStyle = styled.span`
  display:inline-block;
  text-align: left;
  width: 30%;
  overflow: hidden;
  text-overflow:ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  height: 22em;
  line-height: 40px;
  /* white-space: nowrap */
`;

const MyContentsListView = () => {
  const [myContentList, setMyContentList] = useState(null);
  const getToken = window.sessionStorage.getItem("token");

  useEffect(() => {
    let ac = new AbortController();
    axios
      .get("http://localhost:5000/myContentList", {
        headers: { "x-access-token": getToken },
      })
      .then(res => {
        setMyContentList([...res.data.contentList]);
      });
    return () => {
      ac.abort();
    };
  }, []);

  return (
    <Font>
      {/* <Border1> */}
      <Border2>
        {myContentList?.map(data => (
          <ContentStyle key={data.id}>
            <Link to={`/content/${data.id}`}>
              <h1>{data.title}</h1>
              <span>{data.createdAt}</span>
              <p>{data.text}</p>
            </Link>
          </ContentStyle>
        ))}
      </Border2>
      {/* </Border1> */}
    </Font>
  );
};

export default MyContentsListView;
