import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import styled from "styled-components";
import ContentListView from "../component/ContentsList/ContentsList";

const Shift = styled.div`
  margin-top: 100px;
`;

const ContentsList = () => {
  return (
    <Fragment>
      <Nav />
      <Shift />
      <ContentListView />
    </Fragment>

  )
}

export default ContentsList;
