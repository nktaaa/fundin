import React from 'react'
import styles from "../components/Signup.module.css";
function Loginpage() {
  return (
    <>
    <div className={`${styles.formcontainer}`}>
    <div className={`${styles.form}`}>
    <form action="">
      <div>
      <label htmlFor="username">User Name: </label>
      <input type="text" name="username" id="username" />
      </div>
      <div>
      <label htmlFor="email">Email : </label>
      <input type="email" name="email" id="email" />
      </div>
     <div>
     <label htmlFor="password">Password : </label>
      <input type="password" name="password" id="password" />
     </div>
     
    </form>
    </div>
    </div>
    
    </>
  )
}

export default Loginpage
