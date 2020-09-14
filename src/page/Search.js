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
