import React from "react";
import styled from "styled-components";
import SearchComponent from "../component/Search/Search";
import Nav from "../component/Nav/Nav";

const Container = styled.article`
  display: block;
  /* background: #f5f5f5; */
  margin-left: 6%;
  margin-right: 6%;
  position: relative;
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;
`;

const Search = () => {
  return (
    <>
      <Container>
        <Nav />
        <SearchComponent />
      </Container>
    </>
  );
};

export default Search;
