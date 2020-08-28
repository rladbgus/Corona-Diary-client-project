import React from "react";
import styled from "styled-components";

const HomeContentsViewStyle = styled.div`
  background: #c2f3ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  line-height: 30px;
`;

const HomePageContentsView = () => {
  return (
    <HomeContentsViewStyle>
      <div className="homeContentsView">
        <div className="homeContentsContainer">
          <button>+</button>
          <br />
          <span className="homeContentsSpan">content1</span>
          <span className="homeContentsSpan">content2</span>
          <span className="homeContentsSpan">content3</span>
          <br />
          <span className="homeContentsSpan">content4</span>
          <span className="homeContentsSpan">content5</span>
          <span className="homeContentsSpan">content6</span>
        </div>
      </div>
    </HomeContentsViewStyle>
  );
};

export default HomePageContentsView;
