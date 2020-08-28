import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav";
import Mypage from "../component/Mypage/Mypage";
import styled from "styled-components";

const Shift = styled.div`
  margin-top: 50px;
`;

function MyPage() {
  return (
    <>
      <Fragment>
        <Nav />
        <Shift />
        <Mypage />
      </Fragment>
    </>
  );
}

export default MyPage;
