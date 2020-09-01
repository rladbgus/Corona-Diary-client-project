import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import WritingPageForm from "../component/Writing/WritingPageForm";

const Shift = styled.div`
  margin-top: 50px;
`;

function Writing() {
  return (
    <Fragment>
      <Nav />
      <Shift />
      <WritingPageForm />
    </Fragment>
  );
}

export default Writing;
