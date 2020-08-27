import React from "react";
import styled from "styled-components";
import SearchComponent from "../component/Search/Search";
import Nav from "../component/Nav/Nav";

const Shift = styled.div`
  margin-top: 150px;
`;

const Search = () => {
  return (
    <>
      <Nav />
      <Shift />
      <SearchComponent />
    </>
  );
};

export default Search;
