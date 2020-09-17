import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const MyContentsListView = () => {
  const url = "http://localhost:5000/myContentList";
  const [myContentList, setMyContentList] = useState(null);
  const getToken = window.sessionStorage.getItem("token");

  useEffect(() => {
    let ac = new AbortController();
    axios
      .get(url, {
        headers: { "x-access-token": getToken },
      })
      .then((res) => {
        setMyContentList([...res.data.contentList]);
      });
    return () => {
      ac.abort();
    };
  }, []);

  return (
    <Font>
      <Title>
        <span className="icon">
          <i className="fab fa-cuttlefish fa-2x" />
        </span>
        My Corona Diary
      </Title>
      <Border>
        {myContentList?.map((data) => (
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

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1111;

const Font = styled.div`
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;

  .icon {
    margin-right: 7px;
    color: #4caf50;
  }
`;

const Title = styled.h1`
  margin: 5% 10% 2% 14%;
  font-size: 50px;
  color: #484848;
  line-height: 160%;

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 15px;
    /* padding-left: 45px; */
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    font-size: 35px;
    font-weight: 530;
    letter-spacing: 15px;
    /* padding-left: 45px; */
  }
`;

const Border = styled.span`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #66bb6a;
  margin: 3% 8%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  flex-direction: row;
  align-self: flex-start;
`;

const ContentStyle = styled.span`
  width: 17em;
  height: 20em;
  line-height: 40px;
  padding: 2.5em;
  margin: 3%;
  background: #ffffff;
  flex-wrap: wrap;
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

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    .icon {
      font-size: 8px;
      padding-left: 45px;
      padding-top: 2%;
    }
  }
`;