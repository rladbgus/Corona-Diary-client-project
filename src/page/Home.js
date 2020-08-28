import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import HomePageIntro from "../component/Home/HomePageIntro";
import HomePageContentsView from "../component/Home/HomePageContentsView";
import HomeGraphView from "../component/Home/HomeGraphView";
import HomeFooterView from "../component/Home/HomeFooterView";

const Shift = styled.div`
  margin-top: 60px;
`;

function Home() {
  return (
    <Fragment>
      <Nav>Home</Nav>
      <Shift />
      <HomePageIntro />
      <HomePageContentsView />
      <HomeGraphView />
      <HomeFooterView />
    </Fragment>
  );
}

export default Home;
