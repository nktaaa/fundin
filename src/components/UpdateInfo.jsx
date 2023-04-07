import React from 'react'
import styles from "../components/UpdateInfo.module.css";
function UpdateInfo() {
  return (
    <>
    <div className={`${styles.FormContainer}`}>
    <form action="" className={`${styles.formbx}`}>
       
        <label htmlFor="C_name">Company Name : </label>
        <input type="text" name="C_name" id="C_name" />
        <label htmlFor="Category">Category : </label>
        <select name="Category" id="category"></select>
         <label htmlFor="abt">About : </label>
         <textarea name="about" id="abt" cols="30" rows="10"></textarea>
         <label htmlFor="year">Year : </label>
         <input type="number" name="year" id="year" />
         <label htmlFor="url">Logo_url : </label>
         <input type="text" name="url" id="url" />
         <label htmlFor="desc">Description : </label>
         <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
         <label htmlFor="rev">Revenue : </label>
         <input type="number" name="rev" id="rev" />
         <label htmlFor="pro">Profit : </label>
         <input type="number" name="pro" id="pro" />
         <label htmlFor="mar">Margin : </label>
         <input type="number" name="mar" id="mar" />
         <label htmlFor="pf">Prev_Funding : </label>
         <input type="number" name="pf" id="pf" />
         <label htmlFor="eb">Ebitda : </label>
         <input type="number" name="eb" id="eb" />
         <label htmlFor="tax">Taxes : </label>
         <input type="number" name="taxes" id="tax" />
         <label htmlFor="exp">Expenses : </label>
         <input type="number" name="exp" id="exp" />
         <label htmlFor="p_val">Previous Valuation : </label>
         <input type="text" name="p_val" id="p_val" />
         <label htmlFor="c_val">Current Valuation : </label>
         <input type="text" name="c_val" id="c_val" />
      </form>
    </div>
      
    </>
  )
}

export  {UpdateInfo}
