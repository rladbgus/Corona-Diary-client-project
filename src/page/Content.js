import React, { Fragment } from "react";
import styled from "styled-components";
import Nav from "../component/Nav/Nav";
import ContentView from "../component/Content/Content";

const Shift = styled.div`
  margin-top: 100px;
`;

function Content() {
  return (
    <div>
      <Fragment>
        <Nav />
        <Shift />
        <ContentView />
      </Fragment>
    </div>
  )
}

export default Content;
