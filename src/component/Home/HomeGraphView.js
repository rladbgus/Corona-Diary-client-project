import React from "react";
import styled from "styled-components";

const HomeGraphViewStyle = styled.div`
  background: #eec2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  line-height: 30px;

  img {
    width: 600;
    height: 400;
  }
`;

const HomeGraphView = () => {
  return (
    <HomeGraphViewStyle>
      <div className="homeGraphView">
        <div className="homeGraphContainer">
          <br />
          <img></img>
        </div>
      </div>
    </HomeGraphViewStyle>
  );
};

export default HomeGraphView;
