import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { Line } from 'react-chartjs-2';

const TempChart = ({selectData}) => {
  const [totalData, setTotalData] = useState({});

  console.log(selectData);
  const chart = () => {
    if(selectData){
    setTotalData({
      labels: selectData.date,
      datasets: [
        {
          label:'Temperature',
          data: selectData.temp,
          backgroundColor:[
            'rgba(75,192,192,0.6)'
          ],
          borderwidth:4
        }
      ]
    })
  }
  }

  useEffect(() => {
    chart();
  }, [selectData])

  return (
    <div className="a" style={{height: "500px", width:"500px"}}>
        <Line data={totalData} 
        />
    </div>
  );
};

export default TempChart;

function solution(arr) {
  var answer = [];
  if(arr.length <= 1){
      return -1;
  }

      const min = Math.min.apply(null, arr);
      answer = arr.filter(value => { 
        return value !== min
        });
  return answer;
}