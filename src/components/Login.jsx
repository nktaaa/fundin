import React from 'react';
import styles from '../components/Login.module.css';
function Login(){
    return(
        <>
        <form action="">
        <div className={`${styles.contain}`}>
            <div>
            <label htmlFor={`${styles.email}`}>Email : </label>
            <input type="email" className={`${styles.email}`} />
            </div>
            <div>
            <label htmlFor={`${styles.pas}`}>Password : </label>
            <input type="password" className={`${styles.pas}`} />
            </div>
            </div>
        </form>
       
       
        </>
    )
}

export {Login};