import React from 'react'
import styles from "../components/Navbar.module.css";
function Navbar() {
  return (
    <>
       <div className={`${styles.NavContainer}`}>
        <div className={`${styles.Title}`}>
        <h2>FundIn <small>beta</small></h2>
        </div>
        <div className={`${styles.LoginBox}`}>
          <div>
          <button className={`${styles.loginbtn}`}>Login</button>
          </div>
          <div>
          <button className={`${styles.sgnbtn}`}>Sign Up</button>
          </div>
          <div className={`${styles.user}`}>
          <i className="fa-solid fa-user"></i>
          </div>
        </div>
       </div>
    </>
  )
}

export {Navbar};