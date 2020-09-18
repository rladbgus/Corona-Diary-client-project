import React, { useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js";

const MyChart = ({ contentsInfo }) => {
  const ctx = document.getElementsByClassName("canvas");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "호흡 증상",
          data: [],
          backgroundColor: ["#ffebee"],
          border: ["1px"],
          borderColor: ["#f44336"],
          borderWidth: 3,
        },
        {
          label: "기침 증상",
          data: [],
          backgroundColor: ["#ede7f6"],
          border: ["1px"],
          borderColor: ["#673ab7"],
          borderWidth: 3,
        },
        {
          label: "식욕 상태",
          data: [],
          backgroundColor: ["#e3f2fd"],
          border: ["1px"],
          borderColor: ["#2196f3"],
          borderWidth: 3,
        },
        {
          label: "수면 상태",
          data: [],
          backgroundColor: ["#e0f2f1"],
          border: ["1px"],
          borderColor: ["#009688"],
          borderWidth: 3,
        },
        {
          label: "피로도",
          data: [],
          backgroundColor: ["#fffde7"],
          border: ["1px"],
          borderColor: ["#ffeb3b"],
          borderWidth: 3,
        },
        {
          label: "심리 상태",
          data: [],
          backgroundColor: ["#fff3e0"],
          border: ["1px"],
          borderColor: ["#ff9800"],
          borderWidth: 3,
        },
      ],
    },
  });

  const addData = (chart, label, data1, data2, data3, data4, data5, data6) => {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data1);
    chart.data.datasets[1].data.push(data2);
    chart.data.datasets[2].data.push(data3);
    chart.data.datasets[3].data.push(data4);
    chart.data.datasets[4].data.push(data5);
    chart.data.datasets[5].data.push(data6);

    // chart.data.datasets.map((dataset) => {
    //   dataset.data.push(data);
    // });
    chart.update();
  };

  useEffect(() => {
    if (contentsInfo) {
      contentsInfo.map(each => {
        addData(
          chart,
          each.createdAt.slice(2, 10),
          each.q_resp,
          each.q_cough,
          each.q_appet,
          each.q_sleep,
          each.q_fatigue,
          each.q_psy
        );
      });
    }
  }, [chart]);

  return (
    <>
      <ChartStyle>
        <canvas
          className="canvas"
          display="block"
          width="770px"
          height="350px"
        ></canvas>
      </ChartStyle>
    </>
  );
};

export default MyChart;

const ChartStyle = styled.div`
  display: block;
  margin: 10px 0px 90px 0px;

  canvas {
    max-width: 900px;
    max-height: 700px;
  }
`;
