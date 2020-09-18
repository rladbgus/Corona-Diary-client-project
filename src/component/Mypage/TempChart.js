import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';

const TempChart = ({selectData}) => {
  const [totalData, setTotalData] = useState({});

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