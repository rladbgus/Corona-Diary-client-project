import React from "react";
import styled from "styled-components";

const SearchComponent = () => {
  return (
    <SearchStyle>
      <i class="fas fa-search fa-1x"></i>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className="searchItems"
      />
    </SearchStyle>
  );
};

export default SearchComponent;


const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const SearchStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  position: relative;
  font-size: 30px;

  .searchItems {
    display: inline-block;
    width: 400px;
    margin-top: 300px;
  }

  input {
    position: absolute;
    padding: 30px 80px;
    font-size: 30px;
    border: none;
    border-bottom: 3px solid #4f5b66;
  }

  i {
    position: absolute;
    top: 100%;
    margin-left: -490px;
    margin-top: 128px;
    z-index: 1;
    color: #4f5b66;
    font-size: 40px;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    input {
      font-size: 15px;
      padding: 10px 5px;
      width: 200px;
    }
    i {
      font-size: 20px;
      padding-left: 45px;
      padding-top: 2%;
    }
  }
`;

