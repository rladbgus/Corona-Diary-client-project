import React from "react";
import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  background-color: #cbe0e7;
  border: 0px;
  border-radius: 0, 0, 10px, 10px;
  height: 50px;

  button {
    float: right;
  }

  .hamberger {
    margin: 10px;
  }

  .search_btn {
    margin: 10px;
  }
`;

function Nav() {
  return (
    <Header>
      <img className="logo" src="" alt="" />
      <span className="home_name">Covid-19 Diary</span>
      <button className="hamberger">햄버거</button>
      <button className="search_btn">검색</button>
    </Header>
  );
}

export default Nav;
