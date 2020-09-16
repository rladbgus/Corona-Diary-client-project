import React from "react";
import styled from "styled-components";
import Nav from "../component/Nav/Nav";
import MyContentsListView from "../component/MyContentsList/MyContentsList";

const MyContentsList = () => {
  return (
    <>
      <Container>
        <Nav />
        <MyContentsListView />
      </Container>
    </>
  );
};

export default MyContentsList;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Container = styled.article`
  display: block;
  margin-left: 6%;
  margin-right: 6%;
  position: relative;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 0%;
    margin-right: 0%;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 0%;
    margin-right: 0%;
    width: 100%;
  }
`;
