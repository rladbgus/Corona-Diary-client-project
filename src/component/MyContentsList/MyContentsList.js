import React from "react";
import styled from "styled-components";

const Border1 = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid #444444;
`;

const Border2 = styled.div`
  width: 70%;
  height: 500px;
  border: 1px solid #444444;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

const ContentStyle = styled.span`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MyContentsListView = () => {
  return (
    <Border1>
      테두리1
      <Border2>
        <ContentStyle>
          {/* 나중에 정보 받아서 띄워주기 */}
          <span className="contentSpan">test 1</span>
          <span className="contentSpan">test 2</span>
          <span className="contentSpan">test 3</span>
          <span className="contentSpan">test 4</span>
          <span className="contentSpan">test 5</span>
          <span className="contentSpan">test 6</span>
        </ContentStyle>
      </Border2>
    </Border1>
  );
};

export default MyContentsListView;
