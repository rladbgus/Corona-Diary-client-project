import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Line } from 'react-chartjs-2';

const TempChart = ({ surveyData }) => {
  console.log(surveyData);
  
  const [totalData, setTotalData] = useState({});
  const [date, setDate] = useState([]);
  const [temp, setTemp] = useState([]);
  
  const chart = () => {
    setTotalData({
      labels: [surveyData[0].createdAt, '20/4/23', '20/5/16'], // 날짜 넣기
      datasets: [
        {
          label:'Temperature',
          data:[12, 43, 23], //온도변화 넣기
          backgroundColor:[
            'rgba(75,192,192,0.6)'
          ],
          borderwidth:4
        }
      ]
    })
  }

  useEffect(() => {
    if(surveyData){
      chart();
      surveyData.map((el) => {
        setDate([el.createdAt]);
        setTemp([el.q_temp]);
      })
    }
  }, [surveyData])

  console.log("날짜", date);
  console.log("온도", temp);


  return (
    <div className="a" style={{height: "500px", width:"500px"}}>
        <Line data={totalData} 
        />
    </div>
  );
};

export default TempChart;