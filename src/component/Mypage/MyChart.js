import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Chart } from "react-charts";

const MyChart = ({ history }) => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <>
      <ChartStyle>
        <div>Hello World!</div>
        <div
          style={{
            width: "700px",
            height: "400px",
          }}
        >
          <Chart data={data} axes={axes} />
        </div>
      </ChartStyle>
    </>
  );
};

export default MyChart;

const ChartStyle = styled.div`
  border: 2px solid;
`;
