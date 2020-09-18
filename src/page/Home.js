import React, { Fragment,useEffect, useState } from "react";
import axios from "axios";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import HomePageIntro from "../component/Home/HomePageIntro";
import HomePageContentsView from "../component/Home/HomePageContentsView";
import HomeGraphView from "../component/Home/HomeGraphView";
import HomeFooterView from "../component/Home/HomeFooterView";

const Home = () => {
  const url = "http://localhost:5000/mainContentList";
  const [mainContentList, setMainCotentList] = useState(null);
  const [coronaData, setCoronaData] = useState('');
  const getToken = window.sessionStorage.getItem("token");

  useEffect(() => {
    let ac = new AbortController();
    axios
      .get(url, {
        headers: { "x-access-token": getToken },
      })
      .then((res) => {
        setCoronaData(res.data.coronaData);
        setMainCotentList([...res.data.contentList]);
      });
    return () => {
      ac.abort();
    };
  }, []);

  return (
    <Fragment>
      <Container>
        <Nav>Home</Nav>
        <HomePageIntro />
        <HomePageContentsView mainContentList={mainContentList} />
        <HomeGraphView coronaData={coronaData}/>
      </Container>
      <HomeFooterView />
    </Fragment>
  );
};

export default Home;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Container = styled.article`
  display: block;
  margin-left: 6%;
  margin-right: 6%;
  position: relative;
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;
