import React, { useState } from "react";
import BarChart from "./BarChart";
import styles from "../components/ChartPages.module.css";
import { UserData } from "./data";
import LineChart from "./LineChart";
import { PieChart } from "./PieChart";
function ChartPages() {
  const [userData, setUserdata] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
       
      },
      {
        label: "User Lost",
        data: UserData.map((data) => data.userLost),
      },
      {
        label: "User won",
        data: UserData.map((data) => data.userwon),
      }
    ],
  });
  return (
    <>
    <div className={`${styles.Charts}`}>
    <div className={`${styles.BarChart}`}>
        <BarChart chartData={userData}/>
      </div>
      <div className={`${styles.LineChart}`}>
      <LineChart chartData={userData} />
      </div>
      <div className={`${styles.PieChart}`}>
      <PieChart chartData={userData}/>
      </div>
    </div>
      
    </>
  );
}

export { ChartPages };
