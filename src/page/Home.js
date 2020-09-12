import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import HomePageIntro from "../component/Home/HomePageIntro";
import HomePageContentsView from "../component/Home/HomePageContentsView";
import HomeGraphView from "../component/Home/HomeGraphView";
import HomeFooterView from "../component/Home/HomeFooterView";

const Shift = styled.div`
  /* margin-top: 60px; */
`;

const Container = styled.article`
  display: block;
  /* background: #ffffff; */
  margin-left: 200px;
  margin-right: 200px;
  position: relative;

  @media only screen and (max-width: 1120px) {
    margin-left: 0px;
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Nav>Home</Nav>
        <Shift />
        <HomePageIntro />
        <HomePageContentsView />
        <HomeGraphView />
        <HomeFooterView />
      </Container>
    </Fragment>
  );
};

export default Home;
