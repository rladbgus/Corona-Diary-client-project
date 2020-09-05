import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import getLogin from "../../Context/Context";

const HomeContentsViewStyle = styled.div`
  background: #c2f3ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  line-height: 30px;
`;

const MainContent = styled.div`
  background: #FFAC9A;
  border-style : solid 3px;
`;

const HomePageContentsView = ({ history }) => {

  const value = useContext(getLogin);
  const [mainContentList, setMainCotentList] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/mainContentList",
    {
      headers: { "x-access-token": value.token }
    })
    .then( res => {
      console.log(res);
      setMainCotentList( [...res.data.contentList] );
    })
  }, []);

  return (
    <HomeContentsViewStyle>
      <div className="homeContentsView">
        <div className="homeContentsContainer">

          <div className="addButton">
          <button onClick={() => history.push('./contentslist')}>+더보기</button>
          </div>

          {mainContentList?.map(data => (
            <MainContent key={data.id}>
              <Link to={`/content/${data.id}`}>
                <h1>{data.title}</h1>
                <span>{data.createdAt}</span>
                <p>{data.text}</p>
              </Link>
            </MainContent>
          ))}
        </div>
      </div>
    </HomeContentsViewStyle>
  );
};

export default withRouter(HomePageContentsView);
