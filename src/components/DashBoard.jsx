import React from "react";
import styles from "../components/DashBoard.module.css";
function DashBoard() {
  return (
    <>
      <div className={`${styles.DBoardContent}`}>
        <div className={`${styles.Sidebar}`}>
          <div >
            <button className={`${styles.btn}`} >Offers</button>
          </div>
          <div >
            <button className={`${styles.btn}`} >Update Info</button>
          </div>
        </div>
        <div className={`${styles.RightSidebar}`} >
            <p className={`${styles.displayp}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius modi expedita architecto quae quia odio nisi enim aut error id ad, tenetur minima delectus amet necessitatibus quaerat aliquam dignissimos, atque illum cupiditate? Ullam unde expedita aperiam necessitatibus. Quo, reprehenderit odio.</p>
        </div>
      </div>
    </>
  );
}

export { DashBoard };
