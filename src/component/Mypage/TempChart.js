import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Line } from "react-chartjs-2";


const TempChart = ({ selectData }) => {
  const [totalData, setTotalData] = useState({});

  const chart = () => {
    if (selectData) {
      setTotalData({
        labels: selectData.date,
        datasets: [
          {
            label: "체온",
            data: selectData.temp,
            backgroundColor: ["rgba(75,192,192,0.6)"],
            borderwidth: 2,
          },
        ],
      });
    }
  };

  useEffect(() => {
    chart();
  }, [selectData]);

  return (
    <ChartStyle>
      <div className="a" display="block" height="450px" width="870px">
        <Line data={totalData} />
      </div>
    </ChartStyle>
  );
};

export default TempChart;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const ChartStyle = styled.div`
  display: block;
  margin: 10px 0px 90px 0px;

  .a {
    max-width: 900px;
    max-height: 700px;

    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
      width: 670px;
      height: 350px;
    }

    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      width: 470px;
      height: 250px;
    }
  }
`;

