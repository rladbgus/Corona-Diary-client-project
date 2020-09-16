import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import HomePageIntro from "../component/Home/HomePageIntro";
import HomePageContentsView from "../component/Home/HomePageContentsView";
import HomeGraphView from "../component/Home/HomeGraphView";
import HomeFooterView from "../component/Home/HomeFooterView";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Nav>Home</Nav>
        <HomePageIntro />
        <HomePageContentsView />
        <HomeGraphView />
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
