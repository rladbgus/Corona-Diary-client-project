import React from "react";
import styled from "styled-components";

const SearchStyleInput = styled.input`
  margin-top: 40px;
  text-align: center;
  width: 400px;
  position: absolute;
  left: 50%;
  margin-left: -200px;
  height: 70px;
  letter-spacing: 30px;
  font-size: 20px;
`;

const SearchStyle = styled.div`
  text-align: center;
  width: 400px;
  position: absolute;
  left: 50%;
  margin-left: -200px;
  font-size: 15px;
`;

const SearchComponent = () => {
  return (
    <form>
      <SearchStyle>
        <div>혹시 찾으시는 것이 있으신가요?</div>
      </SearchStyle>
      <SearchStyleInput input type="text" placeholder="검색해주세요" />
    </form>
  );
};

export default SearchComponent;
