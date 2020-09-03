import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import getToken from "../../Context/Context";
import { Link } from "react-router-dom";

const Border1 = styled.div`
  width: 100%;
  border: 1px solid #444444;
  background-color:#B7A7F6;
`;

const Border2 = styled.div`
  width: 70%;
  border: 1px solid #444444;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-color:#D7D0F1;
`;

const ContentStyle = styled.span`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MyContentsListView = () => {

  const value = useContext(getToken);
  const [myContentList, setMyContentList] = useState(null);

  useEffect(() => {
    axios.get("http://54.180.108.57:5000/myContentList",
      {
        headers:
          { "x-access-token": value.token }
      })
      .then(res => {
        console.log(res);
        setMyContentList([...res.data.contentList])
      });
  }, []);
  console.log(myContentList);

  return (
    <Border1>
      <Border2>
        {myContentList?.map(data => (
          <ContentStyle>
            <Link to={`/content/${data.id}`}>
              <h1>{data.title}</h1>
              <span>{data.createdAt}</span>
              <p>{data.text}</p>
            </Link>
          </ContentStyle>
        ))}
      </Border2>
    </Border1>
  );
};

export default MyContentsListView;
