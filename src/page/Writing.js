import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import WritingForm from "../component/Writing/WritingForm";
import Survey from "../component/Writing/Survey";
import styled from "styled-components";

const Shift = styled.div`
  margin-top: 50px;
`;

function Writing() {
  return (
    <Fragment>
      <Nav />
      <Shift />
      <WritingForm />
      <Survey />
    </Fragment>
  );
}

export default Writing;
