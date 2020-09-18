import React, { useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js";

const HomeGraphView = ({coronaData}) => {
console.log(coronaData);
  const charts = () => {
    const ctx = document.getElementsByClassName("canvas");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [ '확진자 수', '격리해제 수', '검사진행수 ', '사망자 수', '치료중 환자 수'],
        datasets: [{
            label: `기준 일: ${coronaData.stateDt}  기준시간: ${coronaData.stateTime}`,
            barPercentage: 10,
            barThickness: 60,
            maxBarThickness: 60,
            minBarLength: 10,
            data: [ coronaData.decideCnt, coronaData.clearCnt, coronaData.examCnt, coronaData.deathCnt, coronaData.careCnt, ],
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 15
          }
        ]
      },
      options : {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
      }
    });
  };

  useEffect(() => {
        charts();
  }, [coronaData]);

  return (
    <HomeGraphViewStyle>
        <canvas
          className="canvas"
          width="870px"
          height="450px"
        ></canvas>
      </HomeGraphViewStyle>
  );
};

export default HomeGraphView;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const HomeGraphViewStyle = styled.div`
  display: block;
    margin-left:10%;
    margin-right: 10%;
    margin-top:50px;
    margin-bottom:50px;
    width: 80%;

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    width: 670px;
    height: 350px;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: 470px;
    height: 250px;
  }
`;
