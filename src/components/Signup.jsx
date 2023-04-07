import React from 'react'
import styles from "../components/Signup.module.css";
function Signup() {
  return (
    <>
    <div className={`${styles.formcontainer}`}>
    <div className={`${styles.form}`}>
    <form action="" className={`${styles.formbx}`}>
      
      <label htmlFor="username" className={`${styles.label}`}>User Name : </label>
      <input type="text" name="username" id="username" className={`${styles.inputbx}`} />
      
     
      <label htmlFor="email" className={`${styles.label}`}>Email : </label>
      <input type="email" name="email" id="email" placeholder='refer@gmail.com' className={`${styles.inputbx}`} />
      
     
     <label htmlFor="password" className={`${styles.label}`}>Password : </label>
      <input type="password" name="password" id="password" className={`${styles.inputbx}`}/>
     
     
    </form>
    </div>
    </div>
    
    </>
  )
}

export {Signup};
