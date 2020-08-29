import React from "react";
import styled from "styled-components";
import Nav from "../component/Nav/Nav";
import MyContentsListView from "../component/MyContentsList/MyContentsList";

const Shift = styled.div`
  margin-top: 150px;
`;

const MyContentsList = () => {
  return (
    <>
      <Nav />
      <Shift />
      <MyContentsListView />
    </>
  );
};

export default MyContentsList;
