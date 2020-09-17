import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js";
import { render } from "react-dom";

const MyChart = ({ contentsInfo }) => {
  useEffect(() => {
    if (contentsInfo) {
      var ctx = document.getElementsByClassName("ts_canvas");
      console.log(contentsInfo[0]);
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            contentsInfo[0].createdAt,
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [contentsInfo[0].q_resp, 19, 3, 5, 12, 3],
            },
          ],
        },
      });
    }
  }, [contentsInfo]);

  return (
    <>
      <canvas className="ts_canvas" width="400" height="400"></canvas>
    </>
  );
};

export default MyChart;
