import React from 'react';
import {Pie} from 'react-chartjs-2';

// import {chart as chartjs} from "chart.js/auto"; 
function PieChart({chartData}) {
  return <>
   <Pie data={chartData} />
  </>

}

export {PieChart};
