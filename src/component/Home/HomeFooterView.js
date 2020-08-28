import React from "react";
import styled from "styled-components";

const HomeFooterViewStyle = styled.div`
  background: #d5c2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  line-height: 30px;
`;

const HomeFooterView = () => {
  return (
    <HomeFooterViewStyle>
      <div className="homeFooterView">
        <div className="homeFooterdiv">C-Lab</div>
        <div className="homeFooterdiv">고건우</div>
        <div className="homeFooterdiv">김유현</div>
        <div className="homeFooterdiv">손명균</div>
        <div className="homeFooterdiv">신우현</div>
      </div>
    </HomeFooterViewStyle>
  );
};

export default HomeFooterView;
