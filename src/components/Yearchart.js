import React, { useRef, useEffect, useState } from "react";
import {Chart, registerables} from "chart.js";
import { historyOptions } from "./historyOptions";
// import Week from "./Week"
import moment from 'moment';
Chart.register(...registerables)

const YearChart = ({ data }) => {
  const chartRef = useRef();
  const {day, week, year, detail} = data;
  let monthDay = [];
  let time = [];
  let prices = [];
  const [timeFormat, setTimeFormat] = useState("24h");



  useEffect(() => {
    
    if(year !== undefined){
      year.map(d => {
        time.push(moment(d.t).format('MMMM'))
        
        prices.push(d.y/100);
      });
      console.log(data);
    }
   
  },[year]);

  useEffect(() => {
    for(let i = 0; i < time.length; i++){
     time[i]=''
    }
    console.log(time)
    console.log(day);
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          
          labels: time,
          datasets: [
            {
              label: `1Y`,
              data: prices,
              backgroundColor: "#2b2b2b",
              borderColor: "white",
              pointRadius: 0,
            },
          ],
        },
        options: {
          legend:{
            display: false
          },
            lineHeightAnnotation: {
              always: true,
              hover: true,
              lineWeight: 1.5,
            },
            animation: {
              duration: 2000,
            },
            maintainAspectRatio: false,
            responsive: true,
           
        },
      });
    
  },[]);

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p>${detail.current_price.toFixed(2)}</p>
          <p>
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div>
      <div>
        <canvas ref={chartRef} style={{backgroundColor: '#2b2b2b'}} id="myChart" width={250} height={400} ></canvas>
      </div>
    </div>
  );
};

export default YearChart;