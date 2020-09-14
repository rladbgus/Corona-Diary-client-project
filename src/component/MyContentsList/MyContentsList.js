import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Font = styled.div`     
font-family: 'S-CoreDream-3Light';
font-weight: normal;
font-style: normal;
line-height : 180%;
`;

const Border = styled.span`
  display : flex;
  flex-wrap: wrap;
  border: 5px solid #dcedc8;
  margin : 5em 10em 7em 8em;
  background-color: #dcedc8;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  min-width: 160px;
  `;

const ContentStyle = styled.span`
  width:17em;
  height: 20em;
  line-height: 40px;
  padding:2.5em;
  margin: 2em 0em 1em 5em;
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
      <Border>
        {myContentList?.map(data => (
          <ContentStyle key={data.id}>
            <Link to={`/content/${data.id}`} className="contentLinkStyle">
              <h1>{data.title}</h1>
              <span style={{ color: "#005005" }}>{data.createdAt}</span>
              <p>{data.text}</p>
            </Link>
          </ContentStyle>
        ))}
      </Border>
    </Font>
  );
};

export default MyContentsListView;
