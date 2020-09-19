import React, { useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js";

const HomeGraphView = ({coronaData}) => {
  const charts = () => {
    const ctx = document.getElementsByClassName("canvas");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [ '확진자 수', '격리해제 수', '검사진행수 ', '사망자 수', '치료중 환자 수'],
        datasets: [{
            label: `기준 일: ${coronaData.stateDt}  기준시간: ${coronaData.stateTime}`,
            maxBarThickness: 70,
            data: [ coronaData.decideCnt, coronaData.clearCnt, coronaData.examCnt, coronaData.deathCnt, coronaData.careCnt, ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 15
          }
        ]
      },
      options: {
        legend: {
          display:false,
          labels: {
            fontColor: "#F86D6D",
            fontSize: 28,
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize : 14,
            },
            gridLines:{
              lineWidth:2
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
    <>
      <CurrentCoronaData>Corona Data (~ing)
      <div className="standard">
      <div className="standardDate">기준일: {coronaData.stateDt}</div>
      <div>기준시간: {coronaData.stateTime}</div>
      </div>
      </CurrentCoronaData>

      <HomeGraphViewStyle>
        <canvas
          className="canvas"
          width="870px"
          height="450px"
        ></canvas>
      </HomeGraphViewStyle>
    </>
  );
};

export default HomeGraphView;

const BREAK_POINT_MOBILE = 580;

const CurrentCoronaData = styled.div`
    position: relative;
    font-size: 55px;
    font-weight: 500;
    margin-top:80px;
    letter-spacing: 15px;
    padding-left: 85px;
    padding-bottom: 30px;
    line-height: 180%;

    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      font-size: 27px;
      font-weight: 500;
      letter-spacing: 15px;
      padding-left: 45px;
    }

    .standard {
    line-height:10px;
    margin-top:30px;
    line-height: 100%;
    padding-left: 35px;
    font-size: 28px;
    letter-spacing: 10px;

    .standardDate{
    margin-bottom: 20px;
    }

    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      padding-left: 0px;
      font-size: 23px;
      letter-spacing: 1px;
    }
  }
`;

const HomeGraphViewStyle = styled.div`
  display: block;
    margin-left:10%;
    margin-right: 10%;
    margin-top:30px;
    margin-bottom:150px;
    width: 80%;

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      font-size: 27px;
      font-weight: 500;
      letter-spacing: 15px;
      padding-left: 45px;
    }
`;