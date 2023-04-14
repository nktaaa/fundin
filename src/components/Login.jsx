import React from 'react';
import styles from '../components/Login.module.css';
function Login(){
    return(
        <>
        <div className={`${styles.container}`}>
        <form className={`${styles.formbx}`}>
            <label  htmlFor='email' className='label'>Email : </label>
            <input type="email" className={`${styles.email}`}  id='email'/>
            <label htmlFor='pwd' className='label'>Password : </label>
            <input type="password" className={`${styles.pwd}`} id='pwd' />
            <button type='submit' className={`${styles.loginBtn}`}>Login</button>
        </form>
            </div>
       
       
        </>
    )
}

export {Login};