import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import WritingPageForm from "../component/Writing/WritingPageForm";

const Shift = styled.div`
  margin-top: 50px;
`;

function Writing({ history }) {
  return (
    <Fragment>
      <Nav />
      <Shift />
      <WritingPageForm history={history} />
    </Fragment>
  );
}

export default Writing;
