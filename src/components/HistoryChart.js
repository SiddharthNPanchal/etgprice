import React, { useRef, useEffect, useState } from "react";
import {Chart, registerables} from "chart.js";
import { historyOptions } from "./historyOptions";
import moment from 'moment';
import { Link } from "react-router-dom";
Chart.register(...registerables)

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const {day, week, year, detail} = data;
  let monthDay = [];
  let time = [];
  let prices = [];
  const [timeFormat, setTimeFormat] = useState("24h");



  useEffect(() => {
    if(day !== undefined){
      day.map(d => {
        time.push(moment(d.t).format('LT'));
        prices.push(d.y/100);
        // monthDay.push({t: moment(d.t).format('LT'), y: d.y});
      });
  
      console.log(monthDay);
    }
   
  },[day]);

  useEffect(() => {
    console.log(day);

      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: time,
          datasets: [
            {
              label: `24H price`,
              data: prices,
              backgroundColor: "#2b2b2b",
              borderColor: "white",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions
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
        <canvas ref={chartRef} style={{backgroundColor: '#2b2b2b'}} id="myChart" width={250} height={400}></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;