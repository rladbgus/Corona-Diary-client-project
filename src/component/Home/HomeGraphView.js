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
`;

const HomeGraphView = () => {
  return (
    <HomeGraphViewStyle>
      <div className="homeGraphView">
        <div className="homeGraphContainer">
          <br />
          <img
            src="https://ichef.bbci.co.uk/news/800/cpsprodpb/161B7/production/_111115509_globalmapfinal_3mar_v2-nc.png"
            alt=""
            width="600"
            height="400"
          ></img>
        </div>
      </div>
    </HomeGraphViewStyle>
  );
};

export default HomeGraphView;
