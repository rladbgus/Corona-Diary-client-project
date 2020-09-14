import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import Mypage from "../component/Mypage/Mypage";
import styled from "styled-components";

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Container = styled.article`
  display: block;
  /* background: #ffffff; */
  margin-left: 6%;
  margin-right: 6%;
  position: relative;

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

function MyPage({ history }) {
  return (
    <Fragment>
      <Container>
        <Nav />
        <Mypage history={history} />
      </Container>
    </Fragment>
  );
}

export default MyPage;
