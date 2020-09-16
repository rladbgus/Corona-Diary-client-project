import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import WritingPageForm from "../component/Writing/WritingPageForm";

function Writing({ history }) {
  return (
    <Fragment>
      <Container>
        <Nav />
        <WritingPageForm history={history} />
      </Container>
    </Fragment>
  );
}

export default Writing;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Container = styled.article`
  display: block;
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
