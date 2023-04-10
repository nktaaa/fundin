import React from 'react'
import styles from '../pages/Company.module.css';
function Company(){
       return(
        <>
        <div className={`${styles.container}`}>
        <div className={`${styles.heading}`}>
            <h1> <i class="fa-brands fa-joomla"></i> Comapny</h1>
            <p>...............A small description about the company ...............</p>
            <p className={`${styles.navigator}`}><span >content 1</span> <span >content 2</span> <span >content 3</span></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L720,160L1440,64L1440,320L720,320L0,320Z"></path></svg>
        </div>
        <div className={`${styles.content}`}>
         <div>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis dicta nobis sunt quibusdam dolorem quas ab dolor? Odit magni alias amet nam voluptatibus consequuntur voluptatem, laborum quas possimus corrupti!
         </div>
         <div>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem eaque consequuntur cumque! Sunt, quasi. Natus ratione asperiores exercitationem sed nulla? Sequi perferendis voluptatum quam, deserunt vitae non repellat eos?
         </div>
        </div>
        </div>
       
        </>
       )
}

export {Company}